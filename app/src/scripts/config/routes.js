import React from 'react';
import { render } from 'react-dom';
import { Route, Link, IndexRoute } from 'react-router';
import App from '../pages/App';
import First from '../pages/First';
import Second from '../pages/Second';
import Third from '../pages/Third';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={First} />
    <Route path="first" component={First} />
    <Route path="second" component={Second} />
    <Route path="third" component={Third} />
  </Route>
)
