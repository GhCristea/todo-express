const { TODO_GET } = require("../repository/constants");
const { todoStore } = require("../repository/todoStore");

module.exports.todoRead = function todoRead(id) {
  todoStore.dispatch({ type: TODO_GET, payload: { id } });
  return todoStore.getCurrentTodo();
};

module.exports.todosRead = function todosRead() {
  return todoStore.getState();
};
