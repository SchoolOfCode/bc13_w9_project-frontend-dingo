import { React, useState } from "react";
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

	return (
		<div className="App">
			<Card card={card} />

			<CardItem />
			<InputForm />
		</div>
	);
}

export default App;
