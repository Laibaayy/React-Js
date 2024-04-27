import "./App.css";
// import Form from "./Components/Form";
import Todo from "./Components/Todo";
import React, { useState } from "react";

function App() {
  let mytodotask = ["This is my first task", "This is my Second task"];
  const [mytodo, setmytodo] = useState(mytodotask);
  const [edit, setedit] = useState({
    condition: false,
    item: {
      text: "",
      id: "",
    },
  });

  const addtask = (input) => {
    setmytodo([input, ...mytodo]);
    // console.log(input);
  };
  const deletingtask = (id) => {
    console.log(id);
    let filtereddata = mytodo.filter((item, index) => {
      return id !== index;
    });
    setmytodo(filtereddata);
    // console.log(filtereddata);
  };

  const clearalltask = () => {
    setmytodo([]);
  };

  const handleedit = (item) => {
    setedit({
      condition: true,
      item: item,
    });
  };
  const editdatahandle = (value) => {
    setedit((prev) => {
      return {
        ...prev,
        item: {
          ...prev.item,
          text: value,
        },
      };
    });
  };

  const Submiteditdatahandle = () => {
    let mydata = mytodo.map((item, index) => {
      if (edit.item.id === index) {
        return edit.item.text;
      } else {
        return item;
      }
    });
    setmytodo(mydata);
    setedit({
      condition: false,
      item: {
        text: "",
        id: "",
      },
    });
  };

  return (
    <div>
      <Todo
        mytodo={mytodo}
        addtask={addtask}
        deletingtask={deletingtask}
        clearalltask={clearalltask}
        handleedit={handleedit}
        edit={edit}
        editdatahandle={editdatahandle}
        Submiteditdatahandle={Submiteditdatahandle}
      />
    </div>
  );
}

export default App;
