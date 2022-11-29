import { render, screen, unmountComponentAtNode, within } from "@testing-library/react";
import InputForm from "./InputForm.js";
import userEvent from "@testing-library/user-event";
import { test, expect, jest } from "@jest/globals";


describe("#InputForm", () => {
  beforeEach(() => {
    // eslint-disable-next-line
    render(<InputForm />);
    // eslint-disable-next-line
    screen.debug();
  });

  test("expect to have the form rendered", () => {
    const titleDiv = screen.getByLabelText("title-container");
    expect(titleDiv).toBeInTheDocument();
  });

  test("checking placeholder text is correct", () => {
    const titlePlaceholder = screen.getByPlaceholderText("Add title here");
    expect(titlePlaceholder).toBeInTheDocument();
  });

  test("correct number of options in category dropdown", () => {
    const categoryDropdown = screen.getByLabelText("category-dropdown");
    //within checks with in the element once correct element already chosen
    const { getAllByRole } = within(categoryDropdown)
    const items = getAllByRole("option")
    expect(items.length).toBe(11)

  });
});
