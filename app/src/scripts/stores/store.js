import React from 'react';
import {dispatch, register} from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';
import Rebase from 're-base';

const CHANGE_EVENT = 'change'

let _ingredients = []; // Ändra till relevant variabelnamn

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

  getBaseIngredients(){
    return _availableIngredients.filter(ingredient => ingredient.baseIngredient )
  },

  getCommonIngredients(){
    return _availableIngredients.filter(ingredient => !ingredient.baseIngredient )
  },

  getCurrentBaseIngredient(){
    return _currentBaseIngredient;
  },    
  
  getCartTotals(){
    return { qty: _ingredients.length };
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