import React from 'react';
import cn from 'classnames';

export default (props) => {
	return (
		<button onClick={props.onClick} className={cn('btn-base-ingredient',{
			'btn-base-ingredient-chosen': props.isChosen
		})}> { props.txt } </button>
	)
}