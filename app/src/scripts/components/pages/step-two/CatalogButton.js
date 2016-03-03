import React from 'react';
import cn from 'classnames';

export default (props) => {
	return (
		<button className={cn('btn-catalog', {
			'active': props.active
		})} 
			onClick={ props.handler }>
			{ props.txt }
		</button>
	)
}