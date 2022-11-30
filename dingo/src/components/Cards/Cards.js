import React from "react";
import "./Cards.css";
import CardItem from "../CardItem/CardItem";

/**
 * Cards component that maps over the resources array and generates a display card for each one.
 * @param {array} cards array of resource objects fetched from database 
 * @returns {component}
 */
function Cards({ cards }) {
	return (
		<div className="cardsBackground">
			{cards.map(card => {
				return (
					<CardItem
						key={card.id}
						image={card.image}
						title={card.title}
						link={card.link}
						difficulty={card.difficulty}
						category={card.category}
						author={card.author}
					/>
				);
			})}
		</div>
	);
}

export default Cards;
