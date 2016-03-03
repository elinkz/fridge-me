import React from 'react';
import CatalogButton from '../step-two/CatalogButton';
import Actions from '../../../actions/actions';

export default (props) => {
	return (
		<tr>
      <td>
	      <CatalogButton />
      </td>
      <td>{props.item.name}</td>
  	</tr>
	)
}