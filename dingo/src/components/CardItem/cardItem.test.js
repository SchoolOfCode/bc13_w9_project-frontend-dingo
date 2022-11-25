// import CardItem from "./CardItem.js";
// import { test, expect } from "@jest/globals";
// import { screen, render } from "@testing-library/react";

// // Card item tests
// describe("#cardItem", ()=>{

//     // test that when an object is passed down and a card created, that it renders with the URL as an href
// test("card item contains the link handed to it as prop", ()=> { 

//     let testCard = {title: "test title", link: "https://testing-library.com/", difficulty: 1, category: "Testing", author: "Bootcamper"}
//     render(<CardItem props={testCard}/>)

//     //🚨 it's not happy with debugging attempt
//     screen.debug();

//     //🚨 and it won't 'find' the right element. Have tried lots of different versions (getting by aria-label, role, text contents, etc) and each time it can't 'find' it. Seems like a broader issue I'm missing here
//     expect(screen.getByRole('link')).toHaveAttribute('href', 'https://testing-library.com/');
//     expect(screen.getByRole('link')).toHaveAttribute('href', 'https://testing-library.com/')

// })

// // 🚨 This one doesn't appear to be running at all according to error logs?
// test("Should render a topic image", ()=>{

//     // could nest this test in the other one to save repeating the 'testcard object creation, but wanted to keep them separate until i coul get one to work
//     let testCard = {title: "test title", link: "https://testing-library.com/", difficulty: 1, category: "Testing", author: "Bootcamper"}

//     // destructuring container so i can refer to the topic-image using its className
//     const {container} = render(<CardItem props={testCard}/>)
//     const topicImage = container.getElementsByClassName("topic-image")
//     console.log("topicImage", topicImage)

//     const topicImageHref = within(topicImage)
//     expect(topicImage).toBe("X")
// })


// })