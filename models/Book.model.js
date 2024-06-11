const { Schema, model} = require("mongoose");

const bookSchema = new Schema({
    title:{type: String, require:[true,"title is required"]},
    author:{type:String, require:[true,"author is required"]},
    description: {type: String, require:[true, "description is required"]}
},
{
   
    timestamps: true
  });
const Book = model("Book", bookSchema);
module.exports = Book;