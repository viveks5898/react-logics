import React, { useState } from "react";
import { Showtodo } from "./Showtodo";
const AddTodo = () => {
  const [todo, setTodos] = useState({ title: "", description: "" });
  const [show, setShow] = useState([]);
  const [input, setInput] = useState({state:false, id:""});


  const isButtonDisable = todo.title === "" || todo.description === "";
  const handleChange = (e) => {
    setTodos({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const handleEdit =(key) =>{
setInput({state:true, id:key})
  console.log("key", key)
  }
   const handdleSave =() =>{

   }
  const handleClick = () => {
    setShow((prevTodo) => [...prevTodo, todo]);
    setTodos({ title: "", description: "" });
  };
  const deleteOnClick = (id) => {
    setShow((prevTodo) => prevTodo.filter((_, key) => key !== id));
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
      <Showtodo show={show} handleEdit={handleEdit} deleteOnClick={deleteOnClick} input={input} />
    </div>
  );
};

export default AddTodo;
