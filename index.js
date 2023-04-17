// creating server

const express = require('express')
const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//importing router
const router = require("./router");
//middleware
app.use(router);


const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose
  .connect("mongodb+srv://viruspatel0:mWmaJg3xfEb8J2z9@cluster0.90z6h9a.mongodb.net/?retryWrites=true&w=majority"
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


  const dotenv = require("dotenv");
  dotenv.config();

  const { getTodos,createTodo } = require("./controllers/Todo");
  router.get("/todos", getTodos);
  router.post("/todos", createTodo);

  const Todo = require("./models/todoModel");



