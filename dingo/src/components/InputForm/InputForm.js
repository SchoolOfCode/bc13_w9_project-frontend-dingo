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
	} = useForm();
	console.log(errors);
	return (
		<form
			onSubmit={handleSubmit(data => {
				console.log(data);
			})}
		>
			<input
				type="text"
				placeholder="Add Title here"
				{...register("title", { required: "This is required" })}
			/>
			<input
				type="text"
				placeholder="Add resource link here"
				{...register("link", { required: "This is required" })}
			/>
			<input type="submit" />
			<select>
				<option>Article</option>
				<option>Video</option>
				<option>Option 3</option>
				<option>Option 4</option>
			</select>
			<select name="language">
				<option>Front-end</option>
				<option>Back-End</option>
				<option>JavaScript</option>
				<option>Option 4</option>
			</select>
			<select name="postedBy">
				<option>Coach</option>
				<option>Bootcamper</option>
				<option>Coding Batman</option>
			</select>
		</form>
	);
}

export default InputForm;
