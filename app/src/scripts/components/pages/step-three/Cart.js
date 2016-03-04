import React from 'react';
import Store from '../../../stores/store';
import CartItem from './CartItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

const ingredients = () => {
  return { items: Store.getCart() }
}

const Cart = ( props ) => {
  var items = props.items.map( ( item, i ) => {
    return (
      <CartItem
          key={i}
          item={item}/>
      )
  } );
  return (
    <div>
      
    </div>
  );
}

export default StoreWatchMixin(Cart,ingredients);