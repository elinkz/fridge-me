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
      <div className="btn-group">
        <CartButton
          handler={
            Actions.addItem.bind(null, props.item)
          }
          txt={ props.item.title }
          />
      </div>
    </div>
  )
}