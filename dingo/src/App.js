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
  // create state for cards - this will be populated with an array of objects from the database
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
      // set state to the payload of request - an array of resource objects 
      setCards(data.payload);
    };
    gatherResources();
    // Add cards state as a dependency so it reloads when a new resource is posted
  }, [cards]);

  // POST request handling: send post request with object as body to the route handler on the backend 
  const postResources = async (obj) => {
    const resources = await fetch(`http://localhost:3000/api/resources`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await resources.json();
    // update cards state with new entered data.
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
