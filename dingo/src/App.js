import { React, useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import InputForm from "./components/InputForm/InputForm";

function App() {
	// create state for cards
	const [cards, setCards] = useState([
		{
			author: "Coach",
			category: "React",
			difficulty: 1,
			estimated_time: "< 30 mins",
			format: "Video",
			link: "https://www.youtube.com/watch?v=-yrnWnN0g9o",
			title: "React With Firebase",
		},
		{
			author: "Coach",
			category: "Node.js",
			difficulty: 3,
			estimated_time: "< 30 mins",
			format: "Video",
			link: "https://www.youtube.com/watch?v=-yrnWnN0g9o",
			title: "Node.js begginer guide",
		},
		{
			author: "Coach",
			category: "UI/UX",
			difficulty: 1,
			estimated_time: "< 30 mins",
			format: "Video",
			link: "https://www.youtube.com/watch?v=-yrnWnN0g9o",
			title: "Principles of design",
		},
		{
			author: "Coach",
			category: "API",
			difficulty: 2,
			estimated_time: "< 30 mins",
			format: "Video",
			link: "https://www.youtube.com/watch?v=-yrnWnN0g9o",
			title: "How programmes communicate",
		},
	]);

	/* 
  Plan:
  Have a resource link in card, that takes to other webpage. ✅
  Start making input form to edit card state
  */

	// load data from database on mount. Using GET request
	useEffect(() => {
		/*  async function gatherResource(obj){

		} */
		const gatherResources = async obj => {
			const resources = await fetch(`http://localhost:3000/api/resources`, {
				method: "GET",

				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await resources.json();
			console.log(data.payload);
			// setting state with payload of request
			setCards(data.payload);
		};
		gatherResources();
	}, []);

	// POST request handling
	const postResources = async obj => {
		const resources = await fetch(`http://localhost:3000/api/resources`, {
			method: "POST",

			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(obj),
		});
		const data = await resources.json();

		console.log(data);
		// updating state with new entered data.
		setCards([...cards, data]);
	};

	return (
		<div className="App">
			{/* rendering components */}
			<InputForm postResources={postResources} />
			<Cards cards={cards} />
		</div>
	);
}

export default App;
