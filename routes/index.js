const express = require("express");
const { createTodo } = require("../controllers/todos/create");
const { getTodos, getTodo } = require("../controllers/todos/read");
const { updateTodo } = require("../controllers/todos/update");
const { deleteTodo } = require("../controllers/todos/delete");
const userRouter = require("./user");
const todosRouter = express.Router();

todosRouter.get("/todos", getTodos);
todosRouter.get("/todos/:id", getTodo);
todosRouter.post("/todos", createTodo);
todosRouter.delete("/todos/:id", deleteTodo);
todosRouter.put("/todos/:id", updateTodo);

module.exports = {
  todosRouter,
  userRouter,
};
