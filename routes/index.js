const express = require("express");
const { createTodo } = require("../controllers/todos/create");
const { getTodos, getTodo } = require("../controllers/todos/read");
const userRouter = require("./user");
const todosRouter = express.Router();

todosRouter.get("/todos", getTodos);
todosRouter.get("/todos/:id", getTodo);
todosRouter.post("/todos", createTodo);

module.exports = {
  todosRouter,
  userRouter,
};
