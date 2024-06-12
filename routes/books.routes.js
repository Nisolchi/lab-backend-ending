const express =require('express');
const router = require("express").Router();

const Book = require("../models/Book.model");
const mongoose =require('mongoose');


router.get("/",(req, res, next)=>{
    res.json("my new Backend");
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
    .then((books)=> res.status(200).json(books))
    .catch((error)=>{
        console.log("error while retrieving the book", error);
        res.status(500).json({message:" Error while retrieving the book"});
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

router.delete("/books/:bookId", (req, res, next)=>{
    const {bookId}=req.params;

    if (!mongoose.Types.bookId.isValid(bookId)) {
        res.status(400).json({ message: "Specified ID is not valid" });
        return;
      }

    Book.findByIdAndDelete(bookId)
    .then(()=>res.status(200).json({message:`book with ${bookId}is deleted successfully`,}))
    .catch((error)=>{
        console.log("Error while deleting the book", error);
        res.status(500).json({message:"Error while deleting the book"});
    });
});



module.exports= router;