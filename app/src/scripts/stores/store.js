import React from 'react';
import {dispatch, register} from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';
import Rebase from 're-base';

const CHANGE_EVENT = 'change'

let _catalog = [], // Ändra till relevant namndata
  recepieData = [], // all data from recepie
  recepieTitle = '', // recepie ID e.g "chickenwok"
  description = '', // recepie description
  baseIngredient = '', // the baseingredient
  ingredients = [], // Ingredients to the recepie
  ref = new Firebase("https://fridge-me.firebaseio.com/"),
  ingredientsData = [],
  baseIngredientsData = [];

// get recepies from database
ref.on("value", function(allSnapshot) {
  allSnapshot.forEach(function(snapshot) {
    var data = snapshot.val();

    recepieTitle = data.title;  // e.g "chicken-wok"
    baseIngredient = data.baseingredient;  // e.g. "chicken"
    description = data.description; // same as -> snapshot.child("description").val();  // e.g. "this is a wok blablabla"
    ingredients = data.ingredients;  // e.g. "chickenWok"

    // push every value to "recepieData"-array 
    recepieData.push(data);
    ingredientsData.push(ingredients);
    baseIngredientsData.push(baseIngredient);
  });
  // console.log(allSnapshot.val());
  console.log('ingredients: ',ingredientsData);
  console.log('recepie data: ',recepieData);
  console.log('baseingredients: ',baseIngredientsData);

});

console.log('outside loop:',recepieData);

for ( let i = 1; i < 9; i++ ) { // Hitta en lösning för att pusha in data från db
  _catalog.push( {
    'id': 'Ingredient' + i,
    'title': 'Ingredient #' + i,
    'summary': 'A great ingredient',
    'description': 'Lorem ipsum dolor sit amet.'
  } );
}

console.log('catalog', _catalog);
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
    console.log('Ingredient already exist'); // Finns redan tillagt 
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