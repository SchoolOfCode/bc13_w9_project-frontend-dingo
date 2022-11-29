import React from "react";
import "./Cards.css";
import CardItem from "../CardItem/CardItem";

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
