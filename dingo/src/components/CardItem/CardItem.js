import React from "react";
import "./CardItem.css";


function CardItem({ image, title, difficulty, category, link, author }) {
	return (
		<div className="cardItem">
			
			{/* here is where we're conditionally rendering the different topic cards using external URLs*/}
			<div className = "topic-image">
				{category === "React" ? <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png
				" alt="react logo"/> : null}
				{category === "API " ? <img src="" alt="API logo"/> : null}
				{category === "Basic JavaScript" ? <img src="" alt="Basic JavaScript logo"/> : null}
				{category === "CSS" ? <img src="" alt="CSS logo"/> : null}
				{category === "Miscellaneous" ? <img src="" alt="Miscellaneous logo"/> : null}
				{category === "Node.js" ? <img src="" alt="Node.js logo"/> : null}
				{category === "SQL" ? <img src="" alt="SQL logo"/> : null}
				{category === "UI/UX" ? <img src="" alt="UI/UX logo"/> : null}
			</div>

			<a href={link}>
				<h1>{title}</h1>
			</a>
			{difficulty === 1 ? <img src={image} alt="dingo" /> : null}

			{difficulty === 2 ? (
				<div className="imageContainer">
					<img src={image} alt="dingo" />
					<img src={image} alt="dingo" />
				</div>
			) : null}
			{difficulty === 3 ? (
				<div className="imageContainer">
					<img src={image} alt="dingo" />
					<img src={image} alt="dingo" />
					<img src={image} alt="dingo" />
				</div>
			) : null}
			
			{/* <p> {difficulty}</p> */}
			
			<p>{author}</p>
		</div>
	);
}

export default CardItem;
