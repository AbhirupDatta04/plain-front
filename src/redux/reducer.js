import { TODO_ADD, TODO_DELETE, TODO_UPDATE } from "./action";

const initialState = {
  todos: [{ title: "Hello", id: 20, completed: false }],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case TODO_UPDATE: {
      const newTodos = state.todos.map((todo, i) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: [...newTodos],
      };
    }
    case TODO_DELETE: {
      const result = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: [...result],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
