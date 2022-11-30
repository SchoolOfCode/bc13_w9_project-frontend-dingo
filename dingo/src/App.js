import { React, useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import InputForm from "./components/InputForm/InputForm";
import Header from "./components/Header/Header";

/**
 * Component that returns all elements within the app
 * @returns {component}
 */
function App() {
  // create state for cards
  const [cards, setCards] = useState([]);

  // Load resources data from database on mount using GET request


  useEffect(() => {


    const gatherResources = async (obj) => {
      const resources = await fetch(`http://localhost:3000/api/resources`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resources.json();
      // setting state with payload of request
      setCards(data.payload);
    };
    gatherResources();
    // Added cards state as a dependency so it reloads when a new resources is posted
  }, [cards]);

  // POST request handling to link front and backend
  const postResources = async (obj) => {
    const resources = await fetch(`http://localhost:3000/api/resources`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await resources.json();
    // updating resources state with new entered data.
    setCards([...cards, data]);
  };

  return (
    <div className="App">
      {/* rendering components */}
      <Header />
      <InputForm postResources={postResources} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
