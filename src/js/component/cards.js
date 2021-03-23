import React from "react";
import PropTypes from "prop-types";
const Card = props => {
	return (
		<div
			className="card text-center bg-info mt-2"
			style={{ height: "9rem", width: "18rem", color: "#35f4c9" }}>
			<p>{props.content}</p>
		</div>
	);
};

Card.propTypes = {
	content: PropTypes.element
};

const CardDeck = () => {
	return (
		<div className="card-deck" style={{ fontSize: "64pt" }}>
			<Card content="a" />
			<Card content="b" />
			<Card content="c" />
		</div>
	);
};

export default CardDeck;
