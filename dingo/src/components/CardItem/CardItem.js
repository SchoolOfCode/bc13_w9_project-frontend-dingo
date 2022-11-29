import React from "react";
import "./CardItem.css";
import dingo from "./dingo.png"

function CardItem({ image, title, difficulty, category, link, author }) {
	return (
		<div className="cardItem">
			
			{/* here is where we're conditionally rendering the different topic cards using external URLs*/}
			<div className = "topic-image">
				{category === "React" ? <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png
				" alt="react logo"/> : null}
				{category === "API" ? <img src="https://cdn-icons-png.flaticon.com/512/2172/2172831.png" alt="API logo"/> : null}
				{category === "Basic JavaScript" ? <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="Basic JavaScript logo"/> : null}
				{category === "Advanced JavaScript" ? <img src="https://e7.pngegg.com/pngimages/130/641/png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo.png" alt="Advanced JavaScript logo"/> : null}
				{category === "CSS" ? <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="CSS logo"/> : null}
				{category === "Miscellaneous" ? <img src="https://cdn-icons-png.flaticon.com/512/1010/1010721.png" alt="Miscellaneous logo"/> : null}
				{category === "Node.js" ? <img src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png" alt="Node.js logo"/> : null}
				{category === "SQL" ? <img src="https://cdn-icons-png.flaticon.com/128/4248/4248340.png" alt="SQL logo"/> : null}
				{category === "UI/UX" ? <img src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png" alt="UI/UX logo"/> : null}
				{category === "Testing" ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffNFCMkCpiaFUO9zQlwIfm5HuobQSdlelQw&usqp=CAU" alt="Testing logo"/> : null}

			</div>

			<a href={link}>
				<h1 aria-label="card-title">{title}</h1>
			</a>
			{difficulty === 1 ? <img src={dingo} alt="dingo" /> : null}

			{difficulty === 2 ? (
				<div className="imageContainer">
					<img src={dingo} alt="dingo" />
					<img src={dingo} alt="dingo" />
				</div>
			) : null}
			{difficulty === 3 ? (
				<div className="imageContainer">
					<img src={dingo} alt="dingo" />
					<img src={dingo} alt="dingo" />
					<img src={dingo} alt="dingo" />
				</div>
			) : null}
			
			{/* <p> {difficulty}</p> */}
			
			<p aria-label="author-tag">{author}</p>
		</div>
	);
}

export default CardItem;
