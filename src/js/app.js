import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./component/product";
import Home from "./component/home";
import Products from "./component/products";
import Card from "./component/cards";
import NavBar from "./component/navbar";
const App = () => {
	return (
		<Router>
			<NavBar />
			<div className="container">
				<Switch>
					<Route exact path="/" component={(Home, Card)} />
					<Route exact path="/product/:id" component={Product} />
					<Route exact path="/products" component={Products} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
