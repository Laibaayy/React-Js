import "./App.css";
import Bodycolor from "./Component/Bodycolor";
import Navbar from "./Component/Navbar";
import React from "react";

function App() {
  const removemode = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };
  const changemode = (cls) => {
    removemode();
    document.body.classList.add("bg-" + cls);
    console.log(cls);
  };

  return (
    <div>
      <Navbar />
      <Bodycolor changemode={changemode} />
    </div>
  );
}

export default App;
