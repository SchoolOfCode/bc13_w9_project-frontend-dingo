import React from "react";
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

function InputForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({});
	console.log(errors);
	return (
		<form
			className="form"
			onSubmit={handleSubmit(data => {
				console.log(data);
			})}
		>
			<input
				type="text"
				placeholder="Add title here"
				{...register("title", { required: "Title is required" })}
			/>

			<input
				type="text"
				placeholder="Add resource link here"
				{...register("link", { required: "Link is required" })}
			/>

			<select
				{...register("Difficulty", { required: "Difficulty is required" })}
			>
				<option value="">Difficulty</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>

			<select {...register("Category", { required: "Category is required" })}>
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

			<select {...register("Author", { required: "Author is required" })}>
				<option value="">Author</option>
				<option value="Coach">Coach</option>
				<option value="Bootcamper">Bootcamper</option>
				<option value="Chris aka Coding Batman">Chris aka Coding Batman</option>
			</select>

			<input type="submit" />
			<p>{errors.title?.message}</p>
			<p>{errors.link?.message}</p>
			<p>{errors.Difficulty?.message}</p>
			<p>{errors.Category?.message}</p>
			<p>{errors.Author?.message}</p>
		</form>
	);
}

export default InputForm;
