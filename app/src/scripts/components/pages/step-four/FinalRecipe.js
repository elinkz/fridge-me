import React from 'react';
import { Link } from 'react-router';
import Store from '../../../stores/store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getStoreVals(){
  return {
    currentRecipe: Store.getChoosenRecipe(),
    items: Store.getCommonIngredients(),
    baseIngredient: Store.getCurrentBaseIngredient()
  }
}

class FinalRecipe extends React.Component {

  renderFinalRecipe () {
    let ingredients = []
    let thisIngredients = []
    // Ingredient id from DB
    // Ingredient id, amout, unit from DB
    var ObjectIngredients = this.props.items.map(item => item);
    var finalRecipeBaseingredient = this.props.currentRecipe.ingredients[0]
    var baseIngredient = this.props.baseIngredient.name

    // Loop through all ingredients in current recipe
    for(let i = 0; i < this.props.currentRecipe.ingredients.length; i++) {
      var ingredientid = this.props.currentRecipe.ingredients[i].ingredientId,
      amount = this.props.currentRecipe.ingredients[i].amount,
      unit = this.props.currentRecipe.ingredients[i].unit;
      // Push amount, unit, and id to ingredientsArray 
      ingredients.push({ingredientid,amount,unit});
      
      // Loop through all ingredients in DB
      for(let j = 0; j < ObjectIngredients.length; j++) {
        
        // Check if any ingredient in DB matches ingredients in generated recipe
        if(ingredients[i].ingredientid === ObjectIngredients[j].ingredientId) {
          var iName = ObjectIngredients[j].name,
          iAmount = ingredients[i].amount,
          iId = ingredients[i].ingredientid,
          iUnit = ingredients[i].unit;
          // Push name, amount, id and unit to thisIngredients array.
          thisIngredients.push({iName,iAmount,iId,iUnit});
        }
      }
    }

    return (
      <div>
        <h2 className="heading-instruction heading-instruction_gen">
          {this.props.currentRecipe.title}
        </h2>
        <div className="content-final-recipe">
          <div className="content-final-recipe_half content-final-recipe_half-1">
            <img className="image-final-recipe" src={"../assets/img/" + this.props.currentRecipe.imagePath} />
          </div>
          <div className="content-final-recipe_half content-final-recipe_half-2">
          <h3>Ingredients</h3>
          <p>{finalRecipeBaseingredient.amount} {finalRecipeBaseingredient.unit} of {baseIngredient}</p>
          {thisIngredients.map(function(info, index) {
            return <p key={ index }>{info.iAmount} {info.iUnit} of {info.iName} </p>
          })}
          </div>
          <div className="col-full">
          <h3>Instructions</h3>
          <p className="final-recipe_instructions">{this.props.currentRecipe.instructions}</p>
          </div>
        </div>
      </div>
    )
  }

  renderError() {
    return (
      <div className="final-recipe-404">
        <h2>We're sorry to tell you this, but something went totally bananas here.</h2>
        <p><img src='http://i.imgur.com/UYsyA0Q.gif' /></p>
      </div>
    )
  }

  hasIngredientData () {
    return !!this.props.currentRecipe.ingredients
  }

  render () {
    return (this.hasIngredientData())
      ? this.renderFinalRecipe()
      : this.renderError()
  }
}

// Set default props
FinalRecipe.propTypes = {
  currentRecipe: React.PropTypes.object
}

FinalRecipe.defaultProps = {
  currentRecipe: {}
}

export default StoreWatchMixin( FinalRecipe, getStoreVals );