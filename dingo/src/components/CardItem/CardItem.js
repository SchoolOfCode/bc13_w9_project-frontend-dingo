import React from "react";
import "./CardItem.css";
import dingo from "./dingo.png";

// FOR loop that renders the same number of dingo images as the number that is passed down as the difficulty prop. We have pulled the for loop outside of the function because it isn't permitted in JSX. But you can just call it wihtin the function, as we've done down there.
// The image elements are pushed into an array which is rendered in the return statement.
const getDingoRatings = (difficulty) => {
  let content = [];
  for (let i = 0; i < difficulty; i += 1) {
    content.push(<img src={dingo} alt="dingo" aria-label="DDImage" />);
  }
  return content;
};

// Card item component: displays data from resources table as category image, a heading that hyperlinks through (on a separate page) to the resource, 1/2/3 dingo images depending on the difficulty rating, and the author of the resource

/**
 * displays data from resources table as category image, a heading that hyperlinks through (on a separate page) to the resource, 1/2/3 dingo images depending on the difficulty rating, and the author of the resource
 * @param {string} title - resource title
 * @param {number} difficulty - difficulty from 1-3
 * @param {string} category - one of ten different topic areas
 * @param {string} link - link to resource
 * @param {string} author - resource contributor (Coach/Bootcamper/Chris)
 * @returns {component}
 */
function CardItem({ title, difficulty, category, link, author }) {
  return (
    <div className="cardItem">
      {/* here is where we're conditionally rendering the different topic cards using external URLs*/}
      <div className="topic-image" aria-label="topic-div">
        {category === "React" ? (
          <img
            // aria label on this image for testing purposes
            aria-label="category-image"
            src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
            alt="react logo"
          />
        ) : null}
        {category === "API" ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/2172/2172831.png"
            alt="API logo"
          />
        ) : null}
        {category === "Basic JavaScript" ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
            alt="Basic JavaScript logo"
          />
        ) : null}
        {category === "Advanced JavaScript" ? (
          <img
            src="https://e7.pngegg.com/pngimages/130/641/png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo.png"
            alt="Advanced JavaScript logo"
          />
        ) : null}
        {category === "CSS" ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
            alt="CSS logo"
          />
        ) : null}
        {category === "Miscellaneous" ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1010/1010721.png"
            alt="Miscellaneous logo"
          />
        ) : null}
        {category === "Node.js" ? (
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png"
            alt="Node.js logo"
          />
        ) : null}
        {category === "SQL" ? (
          <img
            src="https://cdn-icons-png.flaticon.com/128/4248/4248340.png"
            alt="SQL logo"
          />
        ) : null}
        {category === "UI/UX" ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png"
            alt="UI/UX logo"
          />
        ) : null}
        {category === "Testing" ? (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffNFCMkCpiaFUO9zQlwIfm5HuobQSdlelQw&usqp=CAU"
            alt="Testing logo"
          />
        ) : null}
      </div>

      <a className="link" target="blank" href={link}>
        <h1 aria-label="card-title" className="title">
          {title}
        </h1>
      </a>

      {/* 🛠️CALLING the getDingoRatings function above to conditionally render the correct number of images */}
      <div className="imageContainer">{getDingoRatings(difficulty)}</div>
      <div aria-label="author-tag" className="author">
        {author}
      </div>
    </div>
  );
}

export default CardItem;
