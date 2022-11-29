import CardItem from "./CardItem.js";
import { test, expect } from "@jest/globals";
import { screen, render, within } from "@testing-library/react";

describe("#CardTitle", () => {
	// render the cardItem before each test
	beforeEach(() => {
		render(
			<CardItem
				title={"test title"}
				category={"React"}
				author={"Bootcamper"}
				difficulty={3}
			/>
		);
		screen.debug();
	});
	// use screen.debug() to see what is being rendered

	test("should render an author tag", () => {
		// use getByLabelText query to find aria-label
		const authorTag = screen.getByLabelText("author-tag");
		// use toBeInTheDocument as a matcher to see if correctly rendering
		expect(authorTag).toBeInTheDocument();
		//  use toHaveTextContext matcher to check it is rendering correct title
		expect(authorTag).toHaveTextContent("Bootcamper");
	});

	test("should render an H1 title", () => {
		// render(<CardItem title={"test title"} category={"React"} author={"Bootcamper"}/>)
		const heading = screen.getByLabelText("card-title");
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("test title");
	});

	test("should render image", () => {
		const image = screen.getByLabelText("category-image");
		expect(image).toHaveAttribute(
			"src",
			"https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
		);
	});

	test("See if difficulty dingos are rendered in", () => {
		// selecting all dingo images and storing them as an array
		const dingoDifficultyArray = screen.getAllByLabelText("DDImage");
		// checking length of array of dingo images matches difficulty given
		expect(dingoDifficultyArray).toHaveLength(3);
	});
});
