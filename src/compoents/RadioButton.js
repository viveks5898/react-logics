import React, { useState } from "react";

const RadioButton = () => {
  const options = ["cricket", "football", "hockey"];
  const days = ["weekday", "weekend"];
  const [optionState, setOptopmState] = useState("");
  const [dayS, setDayS] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          gap: "45px",
          marginTop: "50px",
        }}
      >
        <div>
          {options.map((ele, key) => (
            <div
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
              key={key}
            >
              <input
                type="radio"
                id={ele}
                name="options"
                value={ele}
                onChange={(e) => console.log(e.target.value)}
              />
              <label for={ele}>{ele}</label>
            </div>
          ))}
        </div>
        <div>
          {days.map((ele, key) => (
            <div
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
              key={key}
            >
              <input
                type="radio"
                id={ele}
                name={ele}
                value={ele}
                onChange={(e) => setDayS(e.target.value)}
                style={{ cursor: "pointer" }}
              />
              <label for={ele}>{ele}</label>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "45px",
        }}
      >
        <p>day : {dayS}</p>
        <p>options : {optionState}</p>
      </div>
    </>
  );
};

export default RadioButton;
