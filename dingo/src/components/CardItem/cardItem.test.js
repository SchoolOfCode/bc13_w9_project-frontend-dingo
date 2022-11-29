import CardItem from "./CardItem.js";
import { test, expect } from "@jest/globals";
import { screen, render, within } from "@testing-library/react";


    test("should render an author tag", ()=>{ 
        render(<CardItem title={"test title"} category={"React"} author={"Bootcamper"}/>)  
        const authorTag = screen.getByLabelText("author-tag");
        expect(authorTag).toBeInTheDocument();
        expect(authorTag).toHaveTextContent("Bootcamper");
    })


    test("should render an H1 title", ()=>{   
        render(<CardItem title={"test title"} category={"React"} author={"Bootcamper"}/>)
        const heading = screen.getByLabelText("card-title");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("test title"); 
    })

 
    // test("should render an image", ()=>{
    //     const {container} = render(<CardItem category={"React"}/>);
    //     const imageDiv = container.getElementsByClassName("topic-image");
    //     const {getAllByRole} = within(imageDiv);
    //     const image = getAllByRole('img');
    //     expect(image).toBeInTheDocument();


    // })


// test that when an object is passed down and a card created, that it rendergit branch
//s with the URL as an href
// test("card item contains the link handed to it as prop", ()=> { 


// <body>
// <div>
//   <div
//     class="cardItem"
//   >
//     <div
//       class="topic-image"
//     />
//     <a href="https://testing-library.com/">
//       <h1>test title</h1>
//     </a>
//     <p />
//   </div>
// </div>
// </body>

// 						title="test title"
// 						link="https://testing-library.com/"
// 						difficulty={card.difficulty}
// 						category={card.category}
// 						author={card.author}

// let testCard = {title: "test title", link: "https://testing-library.com/", difficulty: 1, category: "Testing", author: "Bootcamper"}
// render(<CardItem props={testCard}/>)

//     //🚨 it's not happy with debugging attempt
//     screen.debug();

// //🚨 and it won't 'find' the right element. Have tried lots of different versions (getting by aria-label, role, text contents, etc) and each time it can't 'find' it. Seems like a broader issue I'm missing here
//     expect(screen.getByRole('link')).toBeInTheDocument
// })

// // 🚨 This one doesn't appear to be running at all according to error logs?
// test("Should render a topic image", ()=>{

 // could nest this test in the other one to save repeating the 'testcard object creation, but wanted to keep them separate until i coul get one to work
//     let testCard = {title: "test title", link: "https://testing-library.com/", difficulty: 1, category: "Testing", author: "Bootcamper"}

// // destructuring container so i can refer to the topic-image using its className
//     const {container} = render(<CardItem props={testCard}/>)
//     const topicImage = container.getElementsByClassName("topic-image")
//     console.log("topicImage", topicImage)

//     const topicImageHref = within(topicImage)
//     expect(topicImage).toBe("X")
// })

// // // 