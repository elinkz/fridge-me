import React from 'react';

export default (props) => {
	return (
		<button onClick={props.onClick} className="btn btn-default btn-sm"> { props.txt } </button>
	)
}