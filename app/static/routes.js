import React from 'react';
import {Router, Route} from 'react-router-dom';
import Home from './components/Home';
// import more components

const routes =(
	<Router >
	<div>
		<Route path='/' component={Home} />
	</div>
	</Router>
);

module.exports = routes;