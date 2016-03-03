import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history'
import Template from './AppTemplate';
import StepOne from './pages/step-one/StepOne';
import StepTwo from './pages/step-two/StepTwo';
import StepThree from './pages/step-three/StepThree';
import StepFour from './pages/step-four/StepFour';

const history = createHistory();


export default () => {
	return (
		<Router history={ history }>
		  <Route path="/" component={Template}>
		    <IndexRoute component={StepOne} />
		    <Route path="step-two" component={StepTwo} />
		    <Route path="step-three" component={StepThree} />
		    <Route path="step-four" component={StepFour} />
		  </Route>
		</Router>
	);
}

