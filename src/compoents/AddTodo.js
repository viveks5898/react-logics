import React, { useState } from "react";
import { Showtodo } from "./Showtodo";
const AddTodo = () => {
  const [todo, setTodos] = useState({ title: "", description: "" });
  const [show, setShow] = useState([]);

  const isButtonDisable = todo.title === "" || todo.description === "";
  const handleChange = (e) => {
    console.log(e.target.value);
    setTodos({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    setShow((prevTodo) => [...prevTodo, todo]);
  };
  return (
    <div className="container width">
      <div className="d-flex p-2 flex-column">
        <h1> Add Todo</h1>
        <div style={{ width: "400px" }}>
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={todo.title}
            onChange={(e) => handleChange(e)}
          />
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={todo.description}
            onChange={(e) => handleChange(e)}
          />
          <button
            disabled={isButtonDisable}
            onClick={() => handleClick()}
            className="btn btn-primary mt-3"
          >
            Add Todo
          </button>
        </div>
      </div>
      <Showtodo show={show} />
    </div>
  );
};

export default AddTodo;
