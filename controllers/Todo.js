const Todo = require("../models/todoModel");

const getTodos = (req, res) => {
  Todo.find({})
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  todo
    .save()
    .then(() => {
      console.log("Saved successfully");
    })
    .catch((err) => {
      console.error("Error saving: ", err);
    });
};

const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: true }
  )
    .then((result) => {
      console.log("Todo Updated", result);
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
