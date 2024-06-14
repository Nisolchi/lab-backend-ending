const express =require('express');
const router = require("express").Router();

const Book = require("../models/Book.model");
const mongoose =require('mongoose');


router.get("/",(req, res, next)=>{
    res.json("my nch Backend");
});

router.get("/books", (req, res, next) =>{
    Book.find()
    .then((allBooks)=> res.json(allBooks))
    .catch((error)=>{
        console.log("error gettin the Books", error);
        res.status(500).json({message: " error while getting the Books"});
    });
});


router.get("/books/:bookId", (req, res, next)=>{
    const {bookId}= req.params;

    if(!mongoose.Types.ObjectId.isValid(bookId)){
        return res.status(400).json({message:"specified ID is not valid"});
    }

    Book.findById(bookId)
    .then((book)=> res.status(200).json(book))
    .catch((error)=>{
        console.log("Error while retrieving the book", error);
        res.status(500).json({message:" error while retrieving the book "});
    });
    

});

router.post("/books", (req, res, next)=>{
    Book.create(req.body)
    .then((response)=> res.status(200).json(response))
    .catch((error)=>{
        console.log("error while creating the book", error);
        res.status(500).json({message:" Error while creating the book"});
    });
    
});

router.put("/:bookId", async (req, res, next) => {
    const { bookId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ message: 'Specified ID is not valid' });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        console.error('Error while updating the book', error);
        res.status(500).json({ message: 'Error while updating the book' });
    }
});

router.delete("/books/:bookId", async (req, res, next) => {
    const { bookId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({ message: 'Specified ID is not valid' });
    }

    try {
        const book = await Book.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: `Book with ID ${bookId} was deleted successfully` });
    } catch (error) {
        console.error('Error while deleting the book', error);
        res.status(500).json({ message: 'Error while deleting the book' });
    }
});

module.exports = router;