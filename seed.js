const mongoose = require("mongoose");
const Book = require("./model");

mongoose
  .connect("mongodb://127.0.0.1:27017/lib")
  .then(async (res) => {
    console.log("DB connection is established");
    await Book.deleteMany();

    const initialData = [
      {
        title: "The Home and the World",
        description:
          "A novel that explores the conflict between tradition and modernity in early 20th-century Bengal.",
        author: "Rabindranath Tagore",
      },
      {
        title: "Romeo and Juliet",
        description:
          "A tragic love story between two young star-crossed lovers from feuding families.",
        author: "William Shakespeare",
      },
      {
        title: "The Lord of the Rings",
        description:
          "A high-fantasy trilogy that follows the quest to destroy the One Ring and save Middle-earth.",
        author: "J.R.R. Tolkien",
      },
      {
        title: "The Odyssey",
        description:
          "An epic poem attributed to Homer, telling the story of Odysseus's journey home after the Trojan War.",
        author: "Homer",
      },
      {
        title: "To Kill a Mockingbird",
        description:
          "A classic novel that addresses issues of racial injustice and moral growth in the American South.",
        author: "Harper Lee",
      },
      {
        title: "Crime and Punishment",
        description:
          "A psychological novel that delves into the moral dilemmas faced by the protagonist, Raskolnikov.",
        author: "Fyodor Dostoevsky",
      },
      {
        title: "Moby-Dick",
        description:
          "An epic novel that tells the story of Captain Ahab's obsessive quest for revenge against the white whale.",
        author: "Herman Melville",
      },
    ];
    await Book.insertMany(initialData);
    console.log("Intial data (Mock data) added succesfully");
    mongoose.connection.close();
  })
  .catch((err) => console.log("Server Error"));
