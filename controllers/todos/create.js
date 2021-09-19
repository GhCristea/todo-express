//TODO create observer pattern to generate uid
const { uid } = require("uid");
const { writeData } = require("../util");

function createTodo(req, res, next) {
  const { title, content } = req.body;
  const note = { id: uid(), title, content };
  writeData(note);
  res.status(201).json({
    status: "Success",
    data: {
      note,
    },
  });
}

module.exports = {
  createTodo,
};
