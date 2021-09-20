const { todoRead, todosRead } = require("../../services/todoRead");

function getTodos(req, res, next) {
  const todos = todosRead();
  if (!todos) {
    res.status(404).json({ status: 404, message: "Something went wrong" });
    return;
  }
  res.status(200).json({
    status: "Success",
    results: todos.length,
    data: todos,
  });
}

async function getTodo(req, res, next) {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ message: "You must provide an id" });
    return;
  }

  const todo = todoRead(id);

  if (!todo || (Array.isArray(todo) && !todo.length)) {
    res.status(404).send({ status: "404", message: "Not Found" });
    return;
  }
  res.status(200).json({
    data: todo,
    status: "Success",
    results: 1,
  });
}

module.exports = {
  getTodos,
  getTodo,
};
