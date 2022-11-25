import React from "react";
// import custom hook
// docs: https://react-hook-form.com/
import { useForm } from "react-hook-form";
import "./InputForm.css";

/* 
Title
Link
Difficulty
Category 1,2
Format (Article, Video, Course)
Estimated completion Time <30mins <1hr <2hr <5hr 10hr or more
Posted by: Bootcamper (1), Coach(2)
*/

// 🚨VICTORIA TESTING EDITS: edded aria-label to the form and name attribute to the title and link input fields so we can refer to them in the test docs

function InputForm({ postResources }) {
	const {
		register,
		handleSubmit,
		// error handling with useForm hook method
		formState: { errors },
	} = useForm({});
	return (
		<form
			aria-label="Add new resource"
			className="form"
			onSubmit={handleSubmit(data => {
				console.log(data);
				postResources(data);
			})}
		>
			<input
				aria-labelledby="title-label"
				type="text"
				placeholder="Add title here"
				// using register to track input using custom hook
				{...register("title", { required: "Title is required" })}
			/>
			{/* using custom hook method of displaying error message and validating form */}
			<p>{errors.title?.message}</p>
			<input
				name="link input field"
				type="text"
				placeholder="Add resource link here"
				{...register("link", { required: "Link is required" })}
			/>
			<p>{errors.link?.message}</p>
			<p>
				{/* dropdown menu element */}
				<select
					{...register("difficulty", { required: "Difficulty is required" })}
				>
					<option value="">Difficulty</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
			</p>
			<p>{errors.Difficulty?.message}</p>
			<select {...register("category", { required: "Category is required" })}>
				<option value="">Category</option>
				<option value="Advanced Javascript">Advanced Javascript</option>
				<option value="API">API</option>
				<option value="Basic Javacsript">Basic Javacsript</option>
				<option value="CSS">CSS</option>
				<option value="Miscellaneous">Miscellaneous</option>
				<option value="Node.js">Node.js</option>
				<option value="React">React</option>
				<option value="SQL">SQL</option>
				<option value="Testing">Testing</option>
				<option value="UI/UX">UI/UX</option>
			</select>
			<p>{errors.Category?.message}</p>
			<select {...register("author", { required: "Author is required" })}>
				<option value="">Author</option>
				<option value="Coach">Coach</option>
				<option value="Bootcamper">Bootcamper</option>
				<option value="Chris aka Coding Batman">Chris aka Coding Batman</option>
			</select>
			<p>{errors.Author?.message}</p>
			<input type="submit" />
		</form>
	);
}

export default InputForm;
