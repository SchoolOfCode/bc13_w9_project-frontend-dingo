import React from "react";
import "./CardItem.css";

function CardItem({ image, title, rating, category }) {
	return (
		<div className="cardItem">
			<img src={image} alt="dingo" />
			<h1>{title}</h1>
			<p> {rating}</p>
			<p>{category}</p>
		</div>
	);
}

export default CardItem;
