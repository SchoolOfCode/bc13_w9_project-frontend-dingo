import React from "react";
import "./Card.css"

 function Card({card,image}){
    return (
        
        <div className = "card">
            {card.map(card => {
              return <Card key={card.id} image={card.image} title={card.title} rating={card.rating} category={card.catrgory}/>
            
            })}
            



        {/* <img src= "https://media.istockphoto.com/id/1214403363/vector/jackal-cunning.jpg?s=612x612&w=0&k=20&c=HQHRTuVrSCO2eoEX0eY9_wiNhScIsF9Y1XQp4gdzRcQ=" alt="dingo"/>
         <h1>Card Title</h1>
        <p> rating: 3 </p>
        <p>Category</p> */}


        </div>
       
    )
}

export default Card