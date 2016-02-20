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
		this.state = {
			tags: [],
        }
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        var tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
        Actions.removeItem(this.state.tags)
    }

    handleAddition(tag) {
        var tags = this.state.tags;
        // if typed in ingredient exists in database, add to array, else, dont
        var ingredientsInDb = this.props.items.map(item => item.name);

        if(ingredientsInDb.indexOf(tag) === -1) return false;
        console.log('item props', this.props.items.indexOf(tag));
        tags.push({
            id: tags.length + 1, // TODO: hämta rätt id från ingrediensen.
            text: tag
        });
        
        this.setState({tags: tags});
        Actions.addItem(this.state.tags);
    }

    handleDrag(tag, currPos, newPos) {
        var tags = this.state.tags;
        // mutate array 
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);
 
        // re-render 
        this.setState({ tags: tags });
    }
    render() {
        var tags = this.state.tags;
        var suggestions = this.props.items.map(item => item.name);
        return (
            <div>
            	<h2 className="view-2">Input Form</h2>
                <ReactTags
                	tags={tags} 
                    suggestions={suggestions}
                    handleDelete={this.handleDelete.bind(this)}
                    handleAddition={this.handleAddition.bind(this)}
                    handleDrag={this.handleDrag.bind(this)} />
            </div>
        )
    }
}
SearchInput.defaultProps = {items:[]}
 
export default StoreWatchMixin( SearchInput, getCatalog ); 