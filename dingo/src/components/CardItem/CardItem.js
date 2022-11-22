import React from "react";
import "./CardItem.css"

function CardItem({card}){
    return (
        <div> 
         <img src={card.image} alt="dingo"/>
         <h1>{card.title}</h1>
        <p> {card.rating}</p>
        <p>{card.category}</p>
        </div>
    )
}

export default CardItem