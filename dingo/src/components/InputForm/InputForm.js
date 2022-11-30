import React from "react";
// import custom hook
import { useForm } from "react-hook-form";
import "./InputForm.css";

// Input form component: renders input fields and drop down menus for users to add new resource to database.
	// aria labels added here for testing 
	// Uses custom form hook: returns an object with key/value pairs that can be directly posted to the database, without having to access values through dot notation. Also comes with easy error handling and validation methods! docs: https://react-hook-form.com/

 
/**
 * Component that renders input fields and drop down menus for users to add new resource to database, using custom form hook
 * @param {async function} - calls post resources which handles POST crud method
 * @returns input form  
 */
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

			<div className="titleContainer" aria-label = "title-container">
				<h1>Add a resource:</h1>
			</div>
			<div className="colParent">
				<div className="left-col">
					<input
						type="text"
						placeholder="Add title here"
						// using register to track input using custom hook
						{...register("title", { required: "Title is required" })}
					/>
					{/* using custom hook method of displaying error message and validating form */}
					<p>{errors.title?.message}</p>
					<input
						type="text"
						placeholder="Add resource link here"
						{...register("link", { required: "Link is required" })}
					/>
					<p>{errors.link?.message}</p>

					{/* dropdown menu element */}
					<select
						{...register("difficulty", { required: "Difficulty is required" })}
					>
						<option value="">Difficulty</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<p>{errors.Difficulty?.message}</p>
				</div>
				<div className="right-col">
					<select
						{...register("category", { required: "Category is required" })} aria-label = "category-dropdown"
					>
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
						<option value="Chris aka Coding Batman">
							Chris aka Coding Batman
						</option>
					</select>
					<p>{errors.Author?.message}</p>
					<input id="submit-btn" type="submit" />
				</div>
			</div>
		</form>
	);
}

export default InputForm;
