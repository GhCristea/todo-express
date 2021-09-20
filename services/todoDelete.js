const { todoStore } = require("../repository/todoStore");
const { TODO_DELETE } = require("../repository/constants");
const { writeTodoToFile } = require("./todo");

module.exports = function (id) {
  todoStore.dispatch({
    type: TODO_DELETE,
    payload: { id },
  });

  const currentState = todoStore.getState();
  writeTodoToFile(currentState);
  return currentState;
};
