import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/products">
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" href="#">
							Pricing
						</Link>
					</li>
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown link
						</Link>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink">
							<Link className="dropdown-item" href="#">
								Action
							</Link>
							<Link className="dropdown-item" href="#">
								Another action
							</Link>
							<Link className="dropdown-item" href="#">
								Something else here
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
