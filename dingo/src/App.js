import { React, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CardItem from "./components/CardItem/CardItem";
import InputForm from "./components/InputForm/InputForm";

function App() {
  const [card, setCard] = useState([
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1214403363/vector/jackal-cunning.jpg?s=612x612&w=0&k=20&c=HQHRTuVrSCO2eoEX0eY9_wiNhScIsF9Y1XQp4gdzRcQ=",
      title: "Card Title",
      resource:
        "https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/",
      rating: 3,
      category: "react",
    },
  ]);

  /* 
  Plan:
  Have a resource link in card, that takes to other webpage. ✅
  Start making input form to edit card state
  */
  useEffect(() => {
    const gatherResources = async (obj) => {
      const resources = await fetch(`http://localhost:3000/api/resources`, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resources.json();
      console.log(data.payload);
      setCard(data.payload);
    };
    gatherResources();
  }, []);

  const postResources = async (obj) => {
    const resources = await fetch(`http://localhost:3000/api/resources`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await resources.json();

    console.log(data);
    setCard([...card, data]);
  };

  return (
    <div className="App">
      <InputForm postResources={postResources} />
      <Card card={card} />
    </div>
  );
}

export default App;
