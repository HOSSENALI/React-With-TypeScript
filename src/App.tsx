import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name:"Hossen Ali",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGy30oLdBfwHCYUuKS3eH0xFqJie_q0lANg&usqp=CAU",
      age:28,
      note:"Nothing.........."
    }
  ]);
  return (
    <div className="App">
      <h1>People Invited to my Party </h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
