const { uid } = require("uid");

function deleteTodo(state, payload) {
  return {
    todos: state.todos.filter((todo) => todo.id !== payload.id),
    currentTodo: null,
  };
}
const createTodo = (state, payload) => {
  const newTodo = Object.assign({}, payload, { id: uid() });
  return {
    todos: [...state.todos, newTodo],
    currentTodo: newTodo,
  };
};

const updateTodo = (state, payload) => {
  const updatedTodos = state.todos.filter((todo) => todo.id !== payload.id);
  return {
    todos: [...updatedTodos, payload],
    currentTodo: payload,
  };
};

function getTodo(state, payload) {
  return {
    todos: state.todos,
    currentTodo: state.todos.filter((todo) => todo.id === payload.id),
  };
}

exports.getTodo = getTodo;
exports.createTodo = createTodo;
exports.deleteTodo = deleteTodo;
exports.updateTodo = updateTodo;
