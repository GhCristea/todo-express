const todoDelete = require("../../services/todoDelete");

function deleteTodo(req, res, next) {
  const { id } = req.params;

  if (!id) {
    res.status(304).json({ status: 304, message: "Invalid title or content" });
    return;
  }
  const todos = todoDelete(id);

  if (!todos) {
    res.status(404).send({ status: 404, message: "Something went wrong" });
    return;
  }

  res.status(201).json({
    status: "Success",
    results: todos.length,
    data: todos,
  });
}
module.exports = {
  deleteTodo,
};
