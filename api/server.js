const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ilkaytech:Alaturka06-@cluster0.npqvv3q.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to mongoDB");
  } catch (error) {}
};

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
