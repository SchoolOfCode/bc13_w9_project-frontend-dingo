import React from "react";
import "./Card.css";
import CardItem from "../CardItem/CardItem";

function Card({ card }) {
	return (
		<div >
			{card.map(card => {
				return (
					<CardItem
						key={card.id}
						image={card.image}
						title={card.title}
						rating={card.rating}
						category={card.catrgory}
						resource={card.resource}
					/>
				);
			})}

			{/* <img src= "https://media.istockphoto.com/id/1214403363/vector/jackal-cunning.jpg?s=612x612&w=0&k=20&c=HQHRTuVrSCO2eoEX0eY9_wiNhScIsF9Y1XQp4gdzRcQ=" alt="dingo"/>
         <h1>Card Title</h1>
        <p> rating: 3 </p>
        <p>Category</p> */}
		</div>
	);
}

export default Card;
