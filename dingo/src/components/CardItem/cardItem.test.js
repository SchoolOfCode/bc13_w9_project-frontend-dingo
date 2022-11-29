import CardItem from "./CardItem.js";
import { test, expect } from "@jest/globals";
import { screen, render, within } from "@testing-library/react";

describe("#CardTitle", ()=>{

    beforeEach(()=>{render(<CardItem title={"test title"} category={"React"} author={"Bootcamper"}/>)});
    screen.debug();
        test("should render an author tag", ()=>{  
            const authorTag = screen.getByLabelText("author-tag");
            expect(authorTag).toBeInTheDocument();
            expect(authorTag).toHaveTextContent("Bootcamper");
        })

        test("should render an H1 title", ()=>{   
            // render(<CardItem title={"test title"} category={"React"} author={"Bootcamper"}/>)
            const heading = screen.getByLabelText("card-title");
            expect(heading).toBeInTheDocument();
            expect(heading).toHaveTextContent("test title"); 
        })

        test('should render image', ()=> {
            const image = screen.getAllByLabelText("category-image"); 
            expect(image).toHaveAttribute('src', "https://cdn-icons-png.flaticon.com/512/1183/1183672.png ")
        })
      
})
 
    