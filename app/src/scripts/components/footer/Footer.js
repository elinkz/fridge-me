import React from 'react';
import cn from 'classnames';

export default (props) => {
	const steps = []
	for (let i = 1; i <= 4; i++) {
		steps.push(
			<li className={
				cn('footer-step', {
					'footer-step-active': props.step === i
				})
			}
			key={i}>{i}</li>
		)
	}
	return (
		<div className='footer'>
			<ul className='footer-steps'>
				{steps}
			</ul>
		</div>
	);
}

