# LAB Backend ENDING module
## Description
In this lab we are going to be backend developers!
The goal is to create a REST API that will allow us to manage a list of books. We will be able to create, read, update and delete books from the list.

## Initializations
1. Fork this repository
2. Clone the repository
3. Run `npm install` to install the dependencies
4. Create a `.env` file in the root of the project and add the MONGODB_URI variable with the connection string to your MongoDB database.

Example:
```
MONGODB_URI=mongodb://dsadsadsagewr3324rwfd:27017/name-of-your-database
```
5. Run `npm run dev` to start the server in development mode. Make sure you get the message in the console that the server is connected to mongoDB.

## Initial setup
As you can see, we already have a basic structure for our project. This is the structure created by the `ironlauncher`. We have a basic express server and a basic route that is already working.

You also have a basic example for a User model inside the models folder. We are not going to use it, but you can use it as a reference when you create a new model.

You can test the route by sending a get request to `http://localhost:5005/` in your Postman. You should get a response with the message "Welcome to the backend universe!".

## Iteration 1 | Create the Book model
Now that we've checked that everything is working, let's start by creating the Book model.
1. Create a new file inside the models folder called `Book.model.js`.
2. Inside the file, create a new schema for the Book model. The schema should have the following fields:
- title: String
- author: String
- description: String
All the fields should be required.

## Iteration 2 | Add some books to the database
Now that we have the model, let's add some books to the database. You can ask chatGPT for a list of 10 books, tell it to create an array of books following the schema we created and add them to the database.
To add them to the database you can open mongoDB Compass and add them manually (copy pasting the array).

## Iteration 3 | Initialize the routes for books
We want to have a few routes to manage the books. To keep it consistent and readable, we want all the routes for books to start with `/api/books`.
1. Create a new file inside the routes folder called `books.routes.js`.
2. Inside the file, create a new router and export it (check the index routes example).
3. Require the book routes in app.js and use the router with the path `/api/books` (you can also check the indexRoutes example).

## Iteration 4 | Create the GET all books route
Now that we have the routes initialized, let's create the first route to get all the books.
1. Inside the books.routes.js file, create a new route that will handle the GET request to `/`.
2. Inside the route, query the database to get all the books and return them as a response.
Remember to import the Book model at the top of the file. Then use the find method to get all the books.
3. Test the route by sending a GET request to `http://localhost:5005/api/books` in your Postman. The response should be an array with all the books.

## Iteration 5 | Create the GET one book route
Now that we have the route to get all the books, let's create a route to get one book by its id.
1. Inside the books.routes.js file, create a new route that will handle the GET request to `/:id`.
2. Inside the route, get the id from the request params and query the database to get the book with that id.
3. Test the route by sending a GET request to `http://localhost:5005/api/books/your-book-id` in your browser or Postman. The response should be the book with that id.

## Iteration 6 | Create the POST route to add a new book
Let's create a route to add a new book.
1. Inside the books.routes.js file, create a new route that will handle the POST request to `/`.
2. Inside the route, get the book data from the request body and create a new book in the database.
3. Test the route by sending a POST request to `http://localhost:5005/api/books` with the book data in the body. You can use Postman to send the request. Remember to set the body type to raw and JSON.

## Iteration 7 | Create the PUT route to update a book
Now, we are going to create the route to update a book.
1. Inside the books.routes.js file, create a new route that will handle the PUT request to `/:id`.
2. Inside the route, get the id from the request params and the book data from the request body. Update the book in the database with the new data.
3. Test the route by sending a PUT request to `http://localhost:5005/api/books/your-book-id` with the new book data in the body. You can use Postman to send the request.

## Iteration 8 | Create the DELETE route to delete a book
Finally, let's create the route to delete a book.
1. Inside the books.routes.js file, create a new route that will handle the DELETE request to `/:id`.
2. Inside the route, get the id from the request params and delete the book from the database.
3. Test the route by sending a DELETE request to `http://localhost:5005/api/books/your-book-id` in your browser or Postman.

Congratulations! You have successfully created a REST API with CRUD operations to manage a list of books. 

## Deliver the project
1. Commit your code to your repository.
2. Copy the link to your repository and share it with us.