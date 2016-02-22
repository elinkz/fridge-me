import React from 'react';
import { Link } from 'react-router';
import Store from '../../../stores/store';
import RecipesItem from '../third/RecipesItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getStoreVals(){
  return {
    currentRecipe: Store.getChoosenRecipe(),
    items: Store.getCommonIngredients()
  }
}

class FinalRecipe extends React.Component {
  render() {
  let ingredients = [];
  let thisIngredients = [];
  // ingredient id from ingrediendDB
  var finalRecipeIngredients = this.props.items.map(item => item.ingredientId);
  // ingredientid, amout, unit from ingredientDB
  var ObjectIngredients = this.props.items.map(item => item);
    // loop through all ingredients in this recipe
    for(let i = 0; i < this.props.currentRecipe.ingredients.length; i++) {
      var ingredientid = this.props.currentRecipe.ingredients[i].ingredientId,
      amount = this.props.currentRecipe.ingredients[i].amount,
      unit = this.props.currentRecipe.ingredients[i].unit;
      // push amount, unit, and id to ingredientsArray 
      ingredients.push({ingredientid,amount,unit});
      
      // loop throug every ingredient in DB
      for(let j = 0; j < ObjectIngredients.length; j++) {
        
        // check if any ingredient in db matches the ingedients in the generated recipe
        if(ingredients[i].ingredientid === ObjectIngredients[j].ingredientId) {
          var iName = ObjectIngredients[j].name,
          iAmount = ingredients[i].amount,
          iId = ingredients[i].ingredientid,
          iUnit = ingredients[i].unit;
          // push the name, amount, id and unit to thisIngredients Array.
          thisIngredients.push({iName,iAmount,iId,iUnit});
        }
      }
    }
    

    return (
      <div>
        <h2 className="heading-instruction">
          {this.props.currentRecipe.title}
        </h2>
        <div className="col-half">
          <img className="image" src={"../assets/img/" + this.props.currentRecipe.imagePath} />
        </div>
        <div className="col-half">
        <h3>Ingredients:</h3>
        {thisIngredients.map(function(info, index) {
          return <p key={ info.iId }>{info.iAmount} {info.iUnit} of {info.iName} </p>;
        })}
        </div>
        <div className="col-full">
        <h3>Description:</h3>
        <p>{this.props.currentRecipe.description}</p>
        </div>
      </div>
    )
  }
};

FinalRecipe.propTypes = {
  currentRecipe: React.PropTypes.object
}

FinalRecipe.defaultProps = {
  currentRecipe: {}
}

export default StoreWatchMixin( FinalRecipe, getStoreVals );