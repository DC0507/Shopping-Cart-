import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" href="#">
				My Shopping Place
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="#">
							Link
						</Link>
					</li>
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Products
						</Link>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdown">
							<Link className="dropdown-item" href="#">
								Categories
							</Link>
							<Link className="dropdown-item" href="#">
								Another action
							</Link>
							<div className="dropdown-divider"></div>
							<Link className="dropdown-item" href="#">
								Something else here
							</Link>
						</div>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link disabled"
							href="#"
							tabindex="-1"
							aria-disabled="true">
							Disabled
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
