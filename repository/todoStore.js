const { getJsonTodos } = require("../services/todo");
const {
  TODO_LOAD,
  TODO_CREATE,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_GET,
} = require("./constants");
const { getTodo, createTodo, updateTodo, deleteTodo } = require("./actions");

const initialState = { todos: Array.from(getJsonTodos()), currentTodo: null };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_LOAD:
      return state;
    case TODO_GET:
      return getTodo(state, payload);
    case TODO_CREATE:
      return createTodo(state, payload);
    case TODO_UPDATE:
      return updateTodo(state, payload);
    case TODO_DELETE:
      return deleteTodo(state, payload);
    default:
      return state;
  }
};

class TodoStore {
  constructor(reducer) {
    this.reducer = reducer;
    this.state = reducer(undefined, { type: "" });
  }

  getState() {
    return this.state.todos;
  }

  getCurrentTodo() {
    return this.state.currentTodo;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

module.exports.todoStore = new TodoStore(reducer);
