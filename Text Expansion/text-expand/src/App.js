import "./App.css";
import React, { useState } from "react";
import Expansion from "./Components/Expansion";
function App() {
  const mydata = [
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem reprehenderit fugit quaerat sapiente illo voluptatibus corrupti tempora est minus consequatur rerum, nihil dignissimos quasi quos? Cupiditate officiis, mollitia accusantium nam deserunt assumenda saepe necessitatibus doloribus. Similique enim non, amet nemo ipsam dolorum reprehenderit obcaecati ratione est sunt ipsa neque ullam quod, tenetur velit corporis placeat.",
    },
    {
      text: " <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consequatur officiis eos soluta. Quis accusamus facilis harum totam magnam, ratione illo veniam quod sit provident quam libero nam officia suscipit tempora assumenda quaerat consequuntur facere? Commodi provident ea voluptatem quia, earum ab officiis sit odio laborum nemo pariatur laudantium, facilis asperiores nulla? Corrupti omnis fugiat, excepturi dolorem recusandae ad consequatur commodi. Quae exercitationem veniam at.</p>",
    },
  ];
  const [todo, settodo] = useState(mydata);
  return (
    <div>
      <Expansion todo={todo} />
    </div>
  );
}

export default App;
