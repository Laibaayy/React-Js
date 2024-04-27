import "./App.css";
import React, { useState } from "react";
import All from "./Components/All";

function App() {
  let myarray = [
    {
      Name: "passport",
      qty: 10,
    },
    {
      Name: "bag",
      qty: 5,
    },
  ];
  const [mylist, setmylist] = useState(myarray);

  const addingitem = (e) => {
    setmylist();
  };

  const Addbuttonevent = (quntity, inp) => {
    const newItem = {
      Name: inp,
      qty: quntity,
    };
    setmylist([newItem, ...mylist]);
  };
  const deletehandler = (index) => {
    let filterarray = mylist.filter((array, id) => {
      return index !== id;
    });
    setmylist(filterarray);
  };

  const clearhandle = () => {
    setmylist([]);
  };

  const sortHandle = (order) => {
    let sorted = [...mylist].sort((a, b) => {
      if (order === "asc") {
        return a.qty - b.qty;
      } else if (order === "desc") {
        return b.qty - a.qty;
      }
      return 0;
    });
    setmylist(sorted);
  };
  return (
    <div>
      <All
        mylist={mylist}
        addingitem={addingitem}
        Addbuttonevent={Addbuttonevent}
        deletehandler={deletehandler}
        clearhandle={clearhandle}
        sortHandle={sortHandle}
      />
    </div>
  );
}

export default App;
