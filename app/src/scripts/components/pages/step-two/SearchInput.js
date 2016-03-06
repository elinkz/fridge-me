import React from 'react';
var ReactTags = require('react-tag-input').WithContext;
import Store from '../../../stores/store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import Actions from '../../../actions/actions';

function getCatalog(){
    return {items: Store.getCommonIngredients()}
}

class SearchInput extends React.Component {
	constructor() {
		super();
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    Actions.removeItem(this.props.item)
  }

  handleAddition(tag) {
    var tags = this.props.item;
    var ingredientsInDb = this.props.items.map(item => item.name);

    if(ingredientsInDb.indexOf(tag) === -1) return false;
    
    // Find chosen ingredient in DB
    var thisIngredient = ingredientsInDb.indexOf(tag);

    // Add the chosen ingredient to array
    Actions.addItem(this.props.items[thisIngredient]);
  }

  handleDrag(tag, currPos, newPos) {
    var tags = this.state.tags;
    // Mutate array 
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // Re-render 
    this.setState({ tags: tags });
  }
  render() {
    var tags = this.props.item
    var suggestions = this.props.items.map(item => item.name);
    return (
      <div className="search-input-wrapper">
        <ReactTags className="search-input"
        	tags={tags} 
          suggestions={suggestions}
          handleDelete={this.handleDelete.bind(this)}
          handleAddition={this.handleAddition.bind(this)}
          handleDrag={this.handleDrag.bind(this)} 
          autocomplete={true}
          autofocus={true}
          minQueryLength={2}
          placeholder="Add new ingredient e.g. &#34;tomatoes&#34;"/>
      </div>
    )
  }
}
SearchInput.defaultProps = {items:[]}
 
export default StoreWatchMixin( SearchInput, getCatalog ); 
