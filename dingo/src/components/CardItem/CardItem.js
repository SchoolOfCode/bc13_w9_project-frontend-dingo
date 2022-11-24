import React from "react";
import "./CardItem.css";

function CardItem({ image, title, difficulty, category, link, author }) {
	return (
		<div className="cardItem">
			<img src={image} alt="dingo" />
			<a href={link}>
				<h1>{title}</h1>
			</a>
			<p> {difficulty}</p>
			<p>{category}</p>
			<p>{author}</p>
		</div>
	);
}

export default CardItem;
