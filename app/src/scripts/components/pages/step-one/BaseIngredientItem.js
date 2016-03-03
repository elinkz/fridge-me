import React from 'react';
import Actions from '../../../actions/actions';
import BaseIngredientButton from './BaseIngredientButton';

class BaseIngredientItem extends React.Component {

  _OnClick (props) {

    Actions.addItem(this.props.baseIngredient)
    Actions.setBaseIngredient( this.props.baseIngredient );    
  }

  render () {
    return (
      <BaseIngredientButton isChosen={this.props.isChosen} onClick={ this._OnClick.bind(this)} txt={ this.props.baseIngredient.name } />
    )
  }
}

BaseIngredientItem.propTypes = { 
  baseIngredient: React.PropTypes.object.isRequired,
  isChosen: React.PropTypes.bool
}

export default BaseIngredientItem;