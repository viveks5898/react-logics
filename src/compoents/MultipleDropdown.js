import React, { useState } from "react";

const MultipleDropdown = () => {
  const locations = [
    {
      country: "United States",
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal"],
    },
    {
      country: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham"],
    },
    {
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane"],
    },
    {
      country: "India",
      cities: ["Mumbai", "Delhi", "Bangalore"],
    },
    {
      country: "Japan",
      cities: ["Tokyo", "Osaka", "Kyoto"],
    },
    {
      country: "France",
      cities: ["Paris", "Marseille", "Lyon"],
    },
    {
      country: "Germany",
      cities: ["Berlin", "Munich", "Hamburg"],
    },
    {
      country: "Brazil",
      cities: ["Rio de Janeiro", "São Paulo", "Brasília"],
    },
    {
      country: "South Africa",
      cities: ["Cape Town", "Johannesburg", "Durban"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const onChangeHandle = (event) => {
    const selectCountry = event.target.value;
    const index = locations.findIndex((ele) => ele.country == selectCountry);
    setActiveIndex(index);
  };
  
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "45px" }}>
        Handling Multiple Drop Down in on Array of object{" "}
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "45px" }}>
        <div>
          <label for="cars">Choose a country:</label>

          <select name="Coutntries" id="coutntries" onChange={onChangeHandle}>
            {locations.map((ele, key) => (
              <option value={ele.country} key={key}>
                {ele.country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name="state" id="state">
            {locations[activeIndex].cities.map((ele, key) => (
              <option value={ele} key={key}>
                {ele}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MultipleDropdown;
