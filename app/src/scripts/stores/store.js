import {dispatch, register} from '../dispatchers/dispatcher';
import AppConstants from '../constants/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change'

var _catalog = []; // Ändra till relevant namndata

for ( let i = 1; i < 9; i++ ) { // Hitta en lösning för att pusha in data från db
  _catalog.push( {
    'id': 'Ingredient' + i,
    'title': 'Ingredient #' + i,
    'summary': 'A great ingredient',
    'description': 'Lorem ipsum dolor sit amet.'
  } );
}

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
};

const _ingredientsTotal = ( qty = 0 ) => { // Räkna ut antal ingredienser, 
  _ingredients.forEach( ingredient  => {
    qty += ingredient.qty;
    console.log(qty);
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