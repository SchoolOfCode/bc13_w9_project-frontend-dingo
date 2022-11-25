import { render, screen, unmountComponentAtNode } from '@testing-library/react';
import InputForm from "./InputForm.js"
import userEvent from "@testing-library/user-event";
import {test, expect, jest} from "@jest/globals";

// do the happy path first, then get first error done, then copy paste
// STICK to the responsibilty of the inputform component! don't stray into other comonents' areas of responsibility. 


// TEST PLAN
//  - add aria labels to the form input fields, e.g.  aria-label="resource title"
//  - identify the input field: let titleInputField = screen.getByRole('textbox', {name: /resource title/i});
//  - Create dummy object: let testResource = {title: "test title", link: "URL", difficculty: 1, category: "Testing", author: "Bootcamper" }

// expect(
//     screen.getByRole('form', {
//       name: /edit a project/i,
//     })
//   ).toHaveFormValues({
//     name: project.name,
//     description: project.description,
//     budget: project.budget,
//     isActive: project.isActive,

// I tried a whole bunch of stuff here, but still couldn't get it to select the elmebt using queries!


describe("#InputForm", ()=>{
 
    describe("Error handling", ()=>{
        test.todo("Should error when no title added")
        test.todo("Should error when no link added") 

        // test.todo("Should not error when all data is added", ()=>{
        //     render(<InputForm/>);
        // })  

    describe("happy path", ()=>{

        test("Title and url fields should have correct value", ()=>{
        let testResource = {title: "test title", link: "URL", difficulty: 1, category: "Testing", author: "Bootcamper"};
        render(<InputForm resource={testResource}/>);
            console.log("HEHEHEHEEHELLOOOOO🚨🚨🚨🚨🚨🚨🚨")
        getByLabelText(
            // If you're using `screen`, then skip the container argument:,
            text: TextMatch,
            options?: {
              selector?: string = '*',
              exact?: boolean = true,
              normalizer?: NormalizerFn,
            }): HTMLElement
       
})
})
})
})
