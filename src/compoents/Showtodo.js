import React from "react";

export const Showtodo = (props) => {
  const { show } = props;
  const list = show.map((ele, key) => {
    return (
      <>
        <tr>
          <th scope="row">{key +1}</th>
          <td>{ele.title}</td>
          <td>{ele.description}</td>
          <td>X</td>
          <td>Edit</td>

        </tr>
      </>
    );
  });
  return (
    <div className="container">
      <table class="table">
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
    </div>
  );
};
