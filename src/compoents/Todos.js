import React from "react";
const Todos = (props) => {
  const { todos } = props;
  const inputEle = todos.map((ele, key) => {
    return (
      <div key={ele.id} >
        <label htmlFor={ele.name}>{ele.name} </label>
        <input id={ele.name} type="text"  placeholder={key ==0 ?"add":"item"}></input> {ele.createdAt}
      </div>
    );
  });
  return (
    <>
      <h3>Reverse with input changes</h3>
      <div style={{ display: "flex", gap: "20px" }}>{inputEle}</div>
    </>
  );
};

export default Todos;
