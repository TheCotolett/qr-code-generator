import React, { useState } from "react";
import "./App.css";
import SwitchButton from "./Components/SwitchButton/SwitchButton";

function App() {
  const [mode, setMode] = useState("dark");
  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
    console.log("Mode: "+mode);
  };


  return (
    <div className={"App"+" "+mode}>
      <SwitchButton
        onClick={() => {
          changeMode();
        }}
        mode={mode}
      />
    </div>
  );
}

export default App;
