import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Template from './AppTemplate';
import First from './pages/first/First';
import Second from './pages/second/Second';
import Third from './pages/third/Third';

export default () => {
	return (
		<Router>
		  <Route path="/" component={Template}>
		    <IndexRoute component={First} />
		    <Route path="second" component={Second} />
		    <Route path="third" component={Third} />
		  </Route>
		</Router>
	);
}
