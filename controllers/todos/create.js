const todoCreate = require("../../services/todoCreate");

function createTodo(req, res, next) {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(304).json({ status: 304, message: "Invalid title or content" });
    return;
  }
  const todo = todoCreate(title, content);
  if (!todo) {
    res.status(404).send({ status: 404, message: "Something went wrong" });
  }
  res.status(201).json({
    status: "Success",
    results: 1,
    data: todo,
  });
}

module.exports = {
  createTodo,
};
