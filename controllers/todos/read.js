const { getJsonTodos } = require("../util");

async function getTodos(req, res, next) {
  let jsonData = null;
  try {
    jsonData = await getJsonTodos();
  } catch (err) {
    console.log(err);
  }

  if (!jsonData) {
    res
      .status(404)
      .json({ status: 404, message: "this resource is not available" });
  }
  res.status(200).json({
    status: "Success",
    results: jsonData.length,
    data: jsonData,
  });
}

async function getTodo(req, res, next) {
  const id = req.params.id;
  let jsonData = null;
  try {
    jsonData = await getJsonTodos();
  } catch (err) {
    res.status(404).send({ status: "404", message: "Not Found" });
    console.log(err);
  }

  const todo = Array.isArray(jsonData) && jsonData.find((el) => el.id === id);
  if (!todo) {
    res.status(404).send({ status: "404", message: "Not Found" });
  }
  res.status(200).json(todo);
}

module.exports = {
  getTodos,
  getTodo,
};
