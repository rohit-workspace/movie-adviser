import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState();
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

      const fetch= fetchApi.filter((option) =>
    search.toLowerCase().includes(search.toLocaleLowerCase())
  );
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ce77af3e2dafe33c7dffcdd6094f8ded&units=metric
      `;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };

    if (search) {
      fetchApi();

      
    }
  }, [search]);

  console.log("======>city", city);
  console.log("======>search", search);
  console.log("======>value", value);

  const ampm = (timestamp) => {
    const dat = new Date(timestamp * 1000).toLocaleDateString();

    const date = new Date(timestamp * 1000);

    const formattedHours = (date.getHours() % 12 || 12)

      .toString()

      .padStart(2, "0");

    const formattedMinutes = date.getMinutes().toString().padStart(2, "0");

    const ampm = date.getHours() >= 12 ? "PM" : "AM";

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="box">
      <div className="inputData">
        <input
          style={{ marginLeft: "40%" }}
          type="search"
          value={value}
          className="inputField"
          placeholder="search"
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
        />
      </div>
      {!city ? (
        <p style={{ marginLeft: "40%" }} className="errorMsg">
          No data found.!!
        </p>
      ) : (
        <div>
          <div className="info">
            <h2 style={{ marginLeft: "40%" }} className="location">
              <i className="fas fa-street-view"></i>
              {search}
            </h2>
            <h1 style={{ marginLeft: "40%" }} className="temp">
              {city.temp}'Cel
            </h1>
            <h3 style={{ marginLeft: "40%" }} className="temp">
              Humidity:{city.humidity}
            </h3>
            <h3 style={{ marginLeft: "40%" }} className="temp">
              pressure:{city.pressure}
            </h3>
            <h3 style={{ marginLeft: "40%" }} className="temp">
              feels_like:{city.feels_like}
            </h3>

            <h3 style={{ marginLeft: "40%" }} className="temp">
              timezone:{city.timezone}
            </h3>
            <h3 style={{ marginLeft: "40%" }} className="temp">
              wind:{city.wind}
            </h3>

            <h3 style={{ marginLeft: "40%" }} className="tempmin_max">
              Min: {city.temp}Cel | Max: {city.temp}Cel
            </h3>
          </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
          <div />
        </div>
      )}
    </div>
  );
};
export default Tempapp;
