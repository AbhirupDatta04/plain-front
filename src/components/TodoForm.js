import React, { useState } from "react";
import { connect } from "react-redux";
import { todoAdd } from "../redux/action";

const TodoForm = ({ todoAdd }) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    todoAdd({ title, id, completed: false });
    setTitle("");
    setId(0);
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <form onSubmit={onSubmit}>
        <>
          <label>ID</label>
          <br />
          <input type="number" onChange={(e) => setId(e.target.value)} />
        </>
        <br />
        <>
          <label>Title</label>
          <br />
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  todoAdd,
};

export default connect(null, mapDispatchToProps)(TodoForm);
