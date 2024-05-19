import React from "react";

export const Showtodo = (props) => {
  const { show, deleteOnClick, handleEdit, input } = props;
  const list = show.map((ele, key) => {
    return (
      <>
        <tr key={key} id={key}>
          <th scope="row">{key + 1}</th>
          <td>{ele.title}</td>
          <td>{ele.description}</td>
          <td onClick={() => deleteOnClick(key)} className="delete">
            X
          </td>
          <td onClick={() => handleEdit(key)}>Edit</td>
        </tr>
        {input.state == true   ?
        <tr id={key}>
          <th>
            <div>
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                // value={todo.title}
                // onChange={(e) => handleChange(e)}
              />
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                // value={todo.description}
                // onChange={(e) => handleChange(e)}
              />
              <button
                // disabled={isButtonDisable}
                // onClick={() => handleClick()}
                className="btn btn-primary mt-3"
              >
                Save Todo
              </button>
            </div>
          </th>
        </tr>:""}
      </>
    );
  });
  return (
    <div className="container">
      {show.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      )}
    </div>
  );
};
