import { render, screen, unmountComponentAtNode } from '@testing-library/react';
import InputForm from "./InputForm.js"
import userEvent from "@testing-library/user-event";
import {test, expect, jest} from "@jest/globals";

// do the happy path first, then get first error done, then copy paste

// STICK to the responsibilty of the inputform component! don't stray into other comonents' areas of responsibility. 
describe("#InputForm", ()=>{
   
    let container = null;
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      // cleanup on exiting
      //unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    describe("Error handling", ()=>{
        test.todo("Should error when no title added")
        test.todo("Should error when no link added") 

        test("Should not error when all data is added", ()=>{
            render(<InputForm/>)
            const input = container.querySelector(`input[name="title"]`);
            console.log(input);

        })  


    })
  
})

//     const props = {
//         handleNewTitle: jest.fn(),
//     };

    //   const input = container.querySelector(`input[name="title"]`);

//     userEvent.type(input, "Test Resource to Add");

// test('Submit button should display correct text', () =>{
//     const buttonText = 'Submit';
//     render(<InputForm buttonText={buttonText}/>)
//     screen.getByRole('input', {name:'Submit'})
//     screen.debug();
//   })