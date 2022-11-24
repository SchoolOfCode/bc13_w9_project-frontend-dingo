import React from "react";
import "./Header.css";
import dingoIcon from "./dingo-border.png";

export default function Header() {
	return (
		<div className="Header">
			<h1 className="pageTitle">Dingos</h1>
			<img src={dingoIcon} alt="Dingo logo" id="DingoIcon" />
			<h1 className="pageTitle">Directives</h1>
		</div>
	);
}
