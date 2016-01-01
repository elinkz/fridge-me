import React from 'react';
import {dispatch, register} from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';
import Rebase from 're-base';

const CHANGE_EVENT = 'change'

/*let _catalog = [], 
  _baseIngredients = [],
  recipeData = [], // All data from recipe
  recipeTitle = '', // recipe ID e.g "chickenwok"
  description = '', // recipe description
  baseIngredient = '', // Baseingredient
  ingredients = [], // Ingredients to the recipe
  ingredientsData = [], 
  baseIngredientsData = [],
  ref = new Firebase("https://fridge-me.firebaseio.com/");*/

  let _catalog = [], 
  _baseIngredients = [],
  recipeData = [], 
  recipeTitle = '', 
  description = '', 
  baseIngredient = '', 
  ingredients = [], 
  ingredientsData = [], 
  baseIngredientsData = [],
  recipesRef = new Firebase("https://fridge-me-2.firebaseio.com/recipes"),
  ingredientsRef = new Firebase("https://fridge-me-2.firebaseio.com/ingredients");


// Get recipes from database
/*ref.on("value", function(allSnapshot) {
  allSnapshot.forEach(function(snapshot) {
    var data = snapshot.val();

    recipeTitle = data.title;  // e.g "chicken-wok"
    baseIngredient = data.baseingredient;  // e.g. "chicken"
    description = data.description; // same as -> snapshot.child("description").val();  // e.g. "this is a wok blablabla"
    ingredients = data.ingredients;  // e.g. "chickenWok"

    recipeData.push(data); // push every value to "recipeData"-array 
    ingredientsData.push(ingredients);
    baseIngredientsData.push(baseIngredient);
  });

  for(let i = 0; i < recipeData.length; i++) { 
    let ingredient = recipeData[i]['ingredients'],
      baseIngredient = recipeData[i]['baseingredient'],
      recipeId = recipeData[i]['recipeID'];

    _baseIngredients.push( {
      'id': recipeId,
      'name': baseIngredient // Something more than "name" is needed here (maybe id of some kind)
    });

    for(let j = 0; j < ingredient.length; j++) {
      _catalog.push( {
        'recipeId': recipeId,
        'id': ingredient[j]['ingredientID'],
        'title': ingredient[j]['name'],
      });
    }
  }

  AppStore.emitChange();

});*/

// Get recipes from database
  recipesRef.orderByChild('title').on('child_added', function(snapshot){
    console.log('Recipte Title ' + snapshot.key() + ' ' + snapshot.val().title);
  });
  
  recipesRef.orderByChild('description').on('child_added', function(snapshot){
    console.log('Desc ' + snapshot.key() + ' ' + snapshot.val().description);
  });
  
  recipesRef.orderByChild('ingredients').on('child_added', function(snapshot){
    console.log(snapshot.val().ingredients);
  });



// VAD ÄR DET HÄR UNDER?

/*let db = new Firebase('https://fridge-me.firebaseio.com/')
let base = 'pork';
    // här ".equalTo('pork')" ska vi på något sätt trycka in 
    // currentbaseingredient för att få ut rätt ingredienser
    // och så kan vi trycka in alla ingredienser i _catalog
  db.orderByChild("baseingredient").equalTo(base).on("child_added", function(snapshot) {
  
  var igData = snapshot.val();
  let ig = igData.ingredients;
  for(let j = 0; j < ig.length; j++) {
    let ingredientt = ig[j];
    testBajs.push({
      'ingredient': ingredientt['name']
    })
  }

  console.log(testBajs);

})*/

let _ingredients = []; // Ändra till relevant variabelnamn
let _baseIngredientsArray = [];

const _removeItem = ( item ) => {
  _ingredients.splice( _ingredients.findIndex( i => i === item ), 1 );
};

const _findIngredient = ( item ) => {
  return _ingredients.find( ingredient => ingredient.id === item.id )
};

const _findBaseIngredient = ( item ) => {
  return _baseIngredientsArray.find( baseIngredient => baseIngredient.name === item.name )
};

const _addItem = ( item ) => {
  const ingredient = _findIngredient( item );
  if ( !ingredient ) {
    _ingredients.push( Object.assign( {qty: 1}, item ) );
  }
  else {
    console.log('Ingredient already added'); // Finns redan tillagt 
  }
  console.log(_ingredients);
};

const _ingredientsTotal = ( qty = 0 ) => { // Räkna ut antal ingredienser, 
  _ingredients.forEach( ingredient  => {
    qty += ingredient.qty;
    console.log('qty', qty);
  } );
  return {qty}; 
};

let _currentBaseIngredient = {};

const _setCurrentBaseIngredient = ( baseIngredient ) => {
  _currentBaseIngredient = baseIngredient
};

let _recipes = [];
function _setRecipes(recipes){
  _recipes = recipes;
}

let _availableIngredients = [];
function _setAvailableIngredients(availableIngredients){
  _availableIngredients = availableIngredients;
}


const AppStore = Object.assign({}, EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getRecipes(){
    return _recipes;
  }, 

  getAvailableIngredients(){
    return _availableIngredients;
  }, 


  getCart(){
    return _ingredients;
  },

  getCatalog(){
    return _catalog.map(item => {
      return Object.assign( {}, item, _ingredients.find( cItem => cItem.id === item.id))
    })
  },   

  getBaseIngredient(){
    return _availableIngredients.filter(ingredient => ingredient.baseIngredient )
  },

  getCurrentBaseIngredient(){
    return _currentBaseIngredient;
  },    
  
  getCartTotals(){
    return _ingredientsTotal();
  },

  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
        _addItem( action.item );
        break;
      case AppConstants.REMOVE_ITEM:
        _removeItem( action.item );
        break;
      case AppConstants.SET_BASE_INGREDIENT:
        _setCurrentBaseIngredient( action.baseIngredient );
        break;
      case AppConstants.GET_RECIPES_SUCCESS:
        _setRecipes( action.recipes );
        break;
      case AppConstants.GET_AVAILABLE_INGREDIENTS_SUCCESS:
        _setAvailableIngredients( action.availableIngredients );
        break;
    }

    AppStore.emitChange();

  })
});

export default AppStore