const todoUpdate = require("../../services/todoUpdate");

function updateTodo(req, res, next) {
  const { title, content } = req.body;
  const id = req.params.id;

  if (!title || !content || !id) {
    res.status(304).json({ status: 304, message: "Invalid title or content" });
    return;
  }

  const todo = todoUpdate({ title, content, id });

  if (!todo) {
    res.status(404).send({ status: 404, message: "Something went wrong" });
    return;
  }
  res.status(201).json({
    status: "Success",
    results: 1,
    data: todo,
  });
}
module.exports = {
  updateTodo,
};
