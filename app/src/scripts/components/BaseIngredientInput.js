import React from 'react';
import RadioGroup from './radioconfig.js';


'use strict';

let BaseIngredientInput = React.createClass({
  getInitialState() {
    return {selectedValue: 'apple'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        {Radio => (
          <div>
          	<h2>{this.state.selectedValue}</h2>
            <label>
              <Radio value="apple" />Apple
            </label>
            <label>
              <Radio value="orange" />Orange
            </label>
            <label>
              <Radio value="watermelon" />Watermelon
            </label>
          </div>
        )}
      </RadioGroup>
    );
  }
});


/*
class BaseIngredientInput extends React.Component {

	 getInitialState() {
    return {selectedValue: 'Chicken'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

	render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        {Radio => (
          <div>
            <label>
              <Radio value="apple" />Apple
            </label>
            <label>
              <Radio value="orange" />Orange
            </label>
            <label>
              <Radio value="watermelon" />Watermelon
            </label>
          </div>
        )}
      </RadioGroup>
    );
  }
};

*/

export default BaseIngredientInput; 