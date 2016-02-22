import AppConstants from '../constants/constants';
import { dispatch, register } from '../dispatchers/dispatcher';

export default {

  addItem( item ){
    dispatch({
      actionType: AppConstants.ADD_ITEM, 
      item
    })
  },
  removeItem( item ){
    dispatch({
      actionType: AppConstants.REMOVE_ITEM, 
      item
    })
  },
  setBaseIngredient( baseIngredient ){
    dispatch({
      actionType: AppConstants.SET_BASE_INGREDIENT, 
      baseIngredient
    })
  },
  setFinalRecipe( choosenRecipe ){
    dispatch({
      actionType: AppConstants.SET_FINAL_RECIPE, 
      choosenRecipe
    })
  },
  getRecipes(){
    dispatch({
      actionType: AppConstants.GET_RECIPES
    })
    let recipesRef = new Firebase("https://fridge-me-2.firebaseio.com/recipes");
    recipesRef.on('value', function(snapshot){
      dispatch({
        actionType: AppConstants.GET_RECIPES_SUCCESS,
        recipes: snapshot.val()
      })
    })
  },
  getAvailableIngredients(){
    dispatch({
      actionType: AppConstants.GET_AVAILABLE_INGREDIENTS
    })
    let availableIngredientsRef = new Firebase("https://fridge-me-2.firebaseio.com/ingredients");
    availableIngredientsRef.on('value', function(snapshot){
      dispatch({
        actionType: AppConstants.GET_AVAILABLE_INGREDIENTS_SUCCESS,
        availableIngredients: snapshot.val()
      })
    })
  }

}