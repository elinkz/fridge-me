var React = require('react');
var ReactDOM = require('react-dom')

const Elin = () => 'hej'

var App = React.createClass({
	render:function(){
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('root'));
