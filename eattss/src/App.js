import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Add from "./Components/Add";
import SplitForm from "./Components/Split-form";
import Todo from "./Components/Todo";
import React, { useState } from "react";
function App() {
  let todo = [
    {
      Name: "Sara",
      image: "https://i.pravatar.cc/48?u=118836",
      price: -7,
      id: 118836,
    },
    {
      Name: "Laiba",
      image: "https://i.pravatar.cc/48?u=556655",
      price: 10,
      id: 556655,
    },
    {
      Name: "Zara",
      image: "https://i.pravatar.cc/48?u=556656",
      price: 0,
      id: 556656,
    },
  ];

  const [AddForm, setAddForm] = useState(false);
  const [todolist, settdodlist] = useState(todo);
  const [selectedfrnd, setselectedfrnd] = useState(null);
  const [calculatingammount, setcalculatingammount] = useState(null);

  const calculating = (num) => {
    setcalculatingammount(
      (calculatingammount.price = calculatingammount.price + num)
    );
  };

  const handleselectedfrnd = (input) => {
    setselectedfrnd((data) => (data?.id === input.id ? null : input));
  };

  const addhandler = () => {
    setAddForm(!AddForm);
  };
  const todorender = (name, image, num, id) => {
    let arr = {
      Name: name,
      image: image,
      price: num,
      id: id,
    };
    settdodlist([...todolist, arr]);
  };
  return (
    <div className="d-flex p-2">
      <div>
        <Todo
          todolist={todolist}
          selectedfrnd={selectedfrnd}
          handleselectedfrnd={handleselectedfrnd}
          setcalculatingammount={setcalculatingammount}
        />
        <button className="btn btn-primary butt" onClick={addhandler}>
          {AddForm ? "Close" : "Add Friend"}
        </button>
        <Add AddForm={AddForm} todorender={todorender} />
      </div>
      <div>
        <SplitForm
          calculating={calculating}
          selectedfrnd={selectedfrnd}
          setselectedfrnd={setselectedfrnd}
          key={selectedfrnd?.id}
        />
      </div>
    </div>
  );
}

export default App;
