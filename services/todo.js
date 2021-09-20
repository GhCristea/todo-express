const { writeFile } = require("fs").promises;
const { readFileSync } = require("fs");
const path = require("path");

const getJsonTodos = () =>
  JSON.parse(readFileSync(path.join(__dirname, "../data.json"), "utf8"));

module.exports.writeTodoToFile = async function (object, state) {
  if (!state) throw new Error("Invalid data");
  try {
    writeFile(
      path.join(__dirname, "../data.json"),
      !object
        ? JSON.stringify(Array.from(state))
        : JSON.stringify(Array.from(state).concat(object))
    );
  } catch (e) {
    console.error(e.message);
  }
};

module.exports.getJsonTodos = getJsonTodos;
