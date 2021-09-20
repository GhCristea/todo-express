const { todoStore } = require("../repository/todoStore");
const { TODO_CREATE } = require("../repository/constants");
const { writeTodoToFile } = require("./todo");

module.exports = function todoCreate(title, content) {
  todoStore.dispatch({
    type: TODO_CREATE,
    payload: { title, content },
  });
  const currentState = todoStore.getCurrentTodo();
  writeTodoToFile(currentState);
  return currentState;
};
