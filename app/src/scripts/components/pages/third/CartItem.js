import React from 'react';
import CatalogButton from '../second/CatalogButton';
import Actions from '../../../actions/actions';

export default (props) => {
	return (
		<tr>
      <td>
	      <CatalogButton
          txt="x"
          handler={Actions.removeItem.bind(null, props.item )} />
      </td>
      <td>{props.item.name}</td>
  	</tr>
	)
}