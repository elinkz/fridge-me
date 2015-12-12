import React from 'react';
import {dispatch, register} from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';
import Rebase from 're-base';

const CHANGE_EVENT = 'change'

let _catalog = [], // Ändra till relevant namndata
  recipeData = [], // All data from recipe
  recipeTitle = '', // recipe ID e.g "chickenwok"
  description = '', // recipe description
  baseIngredient = '', // Baseingredient
  ingredients = [], // Ingredients to the recipe
  ref = new Firebase("https://fridge-me.firebaseio.com/"),
  ingredientsData = [], 
  baseIngredientsData = [];

// Get recipes from database
ref.on("value", function(allSnapshot) {
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
  // console.log(allSnapshot.val());
  //console.log('ingredients: ', ingredientsData);
  //console.log('recipe data: ', recipeData);
  console.log('baseingredients: ', baseIngredientsData);

  // Output all ingredients individually for view 2
  for(let i = 0; i < ingredientsData.length; i++) { 
    let ingredient = ingredientsData[i];
    for(let j = 0; j < ingredient.length; j++) {
      console.log('ingredient ', ingredient[j]['name']);
      _catalog.push( {
        'id': ingredient[j]['name'],
        'title': ingredient[j]['name'],
      });
    }
  }
  
  console.log('catalog', _catalog);

});

/*for ( let i = 1; i < 9; i++ ) { // Hitta en lösning för att pusha in data från db
  _catalog.push( {
    'id': 'Ingredient' + i,
    'title': 'Ingredient #' + i,
    'summary': 'A great ingredient',
    'description': 'Lorem ipsum dolor sit amet.'
  } );
}*/

var _ingredients = []; // Ändra till relevant namndata

const _removeItem = ( item ) => {
  _ingredients.splice( _ingredients.findIndex( i => i === item ), 1 );
};

const _findIngredient = ( item ) => {
  return _ingredients.find( ingredient => ingredient.id === item.id )
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

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getCart(){
    console.log(_ingredients);
    return _ingredients;
  },

  getCatalog(){
    return _catalog.map(item => {
      return Object.assign( {}, item, _ingredients.find( cItem => cItem.id === item.id))
    })
  },

  getCartTotals(){
    return _ingredientsTotal();
  },

  getBaseIngredients(){
    return baseIngredientsData;
  },

  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
        _addItem( action.item );
        break;
      case AppConstants.REMOVE_ITEM:
        _removeItem( action.item );
        break;
    }

    AppStore.emitChange();

  })
});

export default AppStore