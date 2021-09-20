const { todoStore } = require("../repository/todoStore");
const { TODO_UPDATE } = require("../repository/constants");
const { writeTodoToFile } = require("./todo");

module.exports = function (payload) {
  todoStore.dispatch({
    type: TODO_UPDATE,
    payload,
  });
  const currentState = todoStore.getState();
  writeTodoToFile(currentState);
  return todoStore.getCurrentTodo();
};
