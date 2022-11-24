import { render, screen } from '@testing-library/react';
import InputForm from "./InputForm.js"
import userEvent from "@testing-library/user-event";
import {test, expect, jest} from "@jest/globals";



test('should render an input', ()=> {

    const props = {
        handleNewTitle: jest.fn(),
    };
    const { container } = render(<InputForm handleSubmit={props.handleNewTitle}/>)
    const input = container.querySelector(`input[name="title"]`);
    userEvent.type(input, "Test Resource to Add");
})






// test('Submit button should display correct text', () =>{
//     const buttonText = 'Submit';
//     render(<InputForm buttonText={buttonText}/>)
//     screen.getByRole('input', {name:'Submit'})
//     screen.debug();
//   })
