const express = require("express");
const mongoose = require("mongoose");
const Book = require("./model.js");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/lib")
  .then((res) => console.log("DB connection is established"))
  .catch((err) => console.log("Server Error"));

// Retreiving all books
app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find({});
    if (books.length === 0) {
      return res.status(404).send("Sorry, We don't have any books");
    }
    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

// Adding a new book
app.post("/api/books", async (req, res) => {
  const newBook = new Book(req.body);
  const { title, author } = newBook;
  // validating request payload and sending coressponding error if any
  if (!title && !author) {
    return res
      .status(400)
      .send("A book can't be added without Title and Author fields");
  }
  if (!title) {
    return res.status(400).send("Title required");
  }
  if (!author) {
    return res.status(400).send("Author required");
  }
  //checking if a book exists with same title and author names
  const bookExists = await Book.findOne({
    title: newBook.title,
    author: newBook.author,
  });
  //preventing addition of duplicates
  if (bookExists) {
    return res.status(400).send("Book already exists");
  }

  try {
    await newBook.save();
    // console.log("New Note Added Successfully");
    return res.status(201).send("New book added succesfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

//Updating an already existing book
app.put("/api/books/:id", async (req, res) => {
  const id = req.params.id;
  const newBook = new Book(req.body);
  const { title, author } = newBook;

  // validating request payload and sending coressponding error if any
  if (!title && !author) {
    return res
      .status(400)
      .send("A book can't be added without Title and Author fields");
  }
  if (!title) {
    return res.status(400).send("Title required for updating a book");
  }
  if (!author) {
    return res.status(400).send("Author required for updating a book");
  }

  try {
    const existingBook = await Book.findById(id);
    // Handling the error of updating an non-existing book
    if (!existingBook) {
      return res.status(400).send("Book doesn't exists");
    }
    //Updating the book
    await Book.findByIdAndUpdate(id, req.body);
    return res.status(200).send("Updated successfully");
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

//Deleting a book
app.delete("/api/books/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // Handling the error of updating an non-existing book
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      return res.status(404).send("Book doesn't exists at all");
    }
    //Deleting the book
    await Book.findByIdAndDelete(id);
    return res.status(200).send("Book deleted succesfully");
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
