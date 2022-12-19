import React from "react";
import "./CardItem.css";
import dingo from "./dingo.png";

// BREAKING CHANGE! The below changes have meant you can no longer ADD a new resource.

// FOR loop that renders the same number of dingo images as the number that is passed down as the difficulty prop. We have pulled the for loop outside of the functino because it isn't permitted in JSX. But you can just call it, as we've done down there. 
const getDingoRatings = (difficulty) => {
  let content = [];
    for (let i = 0; i < difficulty; i += 1) {
      content.push(<img src={dingo} alt="dingo" aria-label="DDImage" />);
    }
  return content;
};

const categories = {
  React: {
    source: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    alt: "react",
  },
  API: {
    source: "https://cdn-icons-png.flaticon.com/512/2172/2172831.png",
    alt: "API",
  },
  BasicJavaScript: {
    source: "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
    alt: "Basic JavaScript",
  },
  AdvancedJavaScript: {
    source:
      "https://e7.pngegg.com/pngimages/130/641/png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo.png",
    alt: "Advanced JavScript",
  },
  CSS: {
    source: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
    alt: "CSS",
  },
  Miscellaneous: {
    source: "https://cdn-icons-png.flaticon.com/512/1010/1010721.png",
    alt: "Miscellaneous",
  },
  Nodejs: {
    source: "https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png",
    alt: "Nodejs",
  },
  SQL: {
    source: "https://cdn-icons-png.flaticon.com/128/4248/4248340.png",
    alt: "SQL",
  },
  UIUX: {
    source: "https://cdn-icons-png.flaticon.com/512/7858/7858975.png",
    alt: "UI/UX",
  },
  Testing: {
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffNFCMkCpiaFUO9zQlwIfm5HuobQSdlelQw&usqp=CAU",
    alt: "Testing",
  },
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

  // 🛠️function that removes all spaces and punctuation from description, and assigns it to the variable categoryRef. This is so that we can use it to draw on the correct alt and source properties of the category object above when conditoinally rendering the image. 
  const categoryRef = category
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .join("");

  return (
    <div className="cardItem">

      {/* Conditionally rendering the different topic images using external image URLs as source*/}
      <div className="topic-image" aria-label="topic-div">
        {/* 🛠️🚨THIS WORKS in the sense that it is conditionally rendering the correct topic image. BUT now react is constantly doing re-renders? */}
        <img
          aria-label="category-image"
          src={categories[categoryRef].source}
          alt={categories[categoryRef].alt}
        />
      </div>

      <a className="link" target="blank" href={link}>
        <h1 aria-label="card-title" className="title">
          {title}
        </h1>
      </a>

{/* 🛠️CALLING the getDingoRatings functino above to conditionally render the correct number of images */}
      <div className="imageContainer">{getDingoRatings(difficulty)}</div>

   

      <div aria-label="author-tag" className="author">
        {author}
      </div>
    </div>
  );
}

export default CardItem;
