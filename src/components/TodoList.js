import React from "react";
import { connect } from "react-redux";
import { todoUpdate, todoDelete } from "../redux/action";

const TodoList = ({ todoDelete, todoUpdate, todos }) => {
  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <>
              <div>
                <h1>Todo</h1>
                <p>ID: {todo.id}</p>
                <p>Title: {todo.title}</p>
                <p>Completed: {todo.completed ? "Yes" : "No"}</p>
              </div>
              {}
              <button onClick={() => todoUpdate(todo.id)}>
                Mark as Complete
              </button>
              <button onClick={() => todoDelete(todo.id)}>Delete</button>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  todoDelete,
  todoUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
