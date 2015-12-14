import React from 'react';
import Actions from '../../../actions/actions';
import BaseIngredientButton from './BaseIngredientButton';


class BaseIngredientItem extends React.Component {
  _onClick () {
    Actions.setBaseIngredient(this.props.baseIngredient)
  }
  render () {
    const itemStyle = {
      borderBottom: '1px solid #ccc',
      paddingBottom: 15
    }
    return (
      <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
        <div className="btn-group">
          <BaseIngredientButton onClick={this._onClick.bind(this)} txt={ this.props.baseIngredient.name } />
        </div>
      </div>
    )
  }
}

export default BaseIngredientItem;