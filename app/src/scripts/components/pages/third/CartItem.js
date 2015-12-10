import React from 'react';
import CartButton from './CartButton';
import Actions from '../../../actions/actions';

export default (props) => {
	return (
		<tr>
      <td>
	      <CartButton
          txt="x"
          handler={Actions.removeItem.bind(null, props.item )} />
      </td>
      <td>{props.item.title}</td>
      <td>{props.item.qty}</td>
  	</tr>
	)
}