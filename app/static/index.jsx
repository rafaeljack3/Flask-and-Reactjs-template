'use strict';
var React = require('react');
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var ReactDOM = require('react-dom');
var Home = require('./components/Home');

// import more components

const routes =(
	<Router >
	<div>
		<Route path='/' component={Home} />
	</div>
	</Router>
)

ReactDOM.render(routes, document.getElementById("root"));