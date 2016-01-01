import React from 'react';
import Actions from '../../../actions/actions';
import CartButton from '../third/CartButton';

export default (props) => {
  let itemStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: 15
  }
  function cartOnClick () {
    if (!props.active) {
      Actions.addItem(props.item)
    } else {
      Actions.removeItem(props.item)
    }
  }
  return (
    <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
      <div className="btn-group">
        <CartButton
          active={props.active}
          handler={ cartOnClick }
          txt={ props.item.name }
          />
      </div>
    </div>
  )
}