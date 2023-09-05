import React, { useState } from "react";
import Tempapp from "./components/Tempapp";
import "./App.css";
import { Switch } from "@mui/material";

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);

    document.documentElement.setAttribute("data-dark-mode", !checked);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://as1.ftcdn.net/v2/jpg/01/79/15/24/1000_F_179152446_d8gMu6db3bTdzldrmH1MXmkKk0sMymLR.jpg")`,
        }}
      ></div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <h2 style={{ marginLeft: "40%", color: "skyblue" }}>Weather App</h2>
      <Tempapp />;
    </>
  );
}

export default App;
