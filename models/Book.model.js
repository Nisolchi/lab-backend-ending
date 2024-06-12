const { Schema, model} = require("mongoose");

const bookSchema = new Schema({
    title:{
      type: String, 
      required:[true,"title is required"]
    },
    author:{
      type:String, 
      required:[true,"author is required"]
    },
    description: {
      type: String, 
      required:[true, "description is required"]}
},
{
   
    timestamps: true
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;