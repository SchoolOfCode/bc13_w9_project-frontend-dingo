import React from "react";
import "./CardItem.css";

function CardItem({ image, title, rating, category, resource }) {
	return (
		<div className="cardItem">
			<img src={image} alt="dingo" />
			<a href={resource}>
				{" "}
				<h1>{title}</h1>{" "}
			</a>
			<p> {rating}</p>
			<p>{category}</p>
		</div>
	);
}

export default CardItem;
