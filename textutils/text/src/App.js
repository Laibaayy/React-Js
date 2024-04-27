import "./App.css";
import Alert from "./Components/Alert";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";

function App() {
  const [mystyle, setmystyle] = useState("light");
  const [text, mytext] = useState("Enable Dark Mode");
  const [alert, myalert] = useState(null);
  const showalert = (messsage, type) => {
    myalert({
      msg: messsage,
      type: type,
    });
    setTimeout(() => {
      myalert(null);
    }, 5000);
  };

  const modehandler = () => {
    if (mystyle === "light") {
      setmystyle("dark");
      mytext("Enable Light mode");
      document.body.style.backgroundColor = "grey";
      // document.title="Dark mode " if you want to change title with it
      showalert("Dark mode enabled", "success");
    } else {
      setmystyle("light");
      mytext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      // document.title="Light mode " if you want to change title with it
      showalert("Light mode enabled", "danger");
    }
  };

  return (
    <div>
      <Navbar mystyle={mystyle} text={text} modehandler={modehandler} />
      <Alert alert={alert} showalert={showalert} />
      <Form mystyle={mystyle} alert={alert} showalert={showalert} />
    </div>
  );
}

export default App;
