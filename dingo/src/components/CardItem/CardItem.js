import React from "react";
import "./CardItem.css";

function CardItem({ image, title, difficulty, category, link, author }) {
	return (
		<div className="cardItem">
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
			<a href={link}>
				<h1>{title}</h1>
			</a>
			{/* <p> {difficulty}</p> */}
			<p>{category}</p>
			<p>{author}</p>
		</div>
	);
}

export default CardItem;
