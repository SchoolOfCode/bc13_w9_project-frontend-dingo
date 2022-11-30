import React from "react";
import "./Header.css";
import dingoIcon from "./dingo-border.png";

/**
 * Function component that renders a header with logo and title.
 * @returns {component}
 */
export default function Header() {
	return (
		<div className="Header">
			<h1 className="pageTitle">Dingos</h1>
			<img src={dingoIcon} alt="Dingo logo" id="DingoIcon" />
			<h1 className="pageTitle">Directives</h1>
		</div>
	);
}
