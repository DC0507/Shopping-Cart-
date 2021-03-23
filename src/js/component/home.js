import React from "react";

//include images into your bundle
import { Link } from "react-router-dom";
import CardDeck from "./cards.js";

//create your first component
const Home = () => {
	return (
		<div className="row row-cols-1 row-cols-md-3">
			<h1>Home</h1>
			<CardDeck />
		</div>
	);
};
