import React from 'react';
import Actions from '../../../actions/actions';
import CartButton from '../third/CartButton';

export default (props) => {
  let itemStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: 15
  }
  return (
    <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
      <h4>{ props.item.title }</h4>
      <img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>
      <p>{ props.item.summary }</p>
      <div className="btn-group">
        <CartButton
          handler={
            Actions.addItem.bind(null, props.item)
          }
          txt="Add ingredient"
          />
      </div>

    </div>
  )
}