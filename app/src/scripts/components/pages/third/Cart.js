import React from 'react';
import Store from '../../../stores/store';
import CartItem from './CartItem';
import RecipesItem from './RecipesItem';
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
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    </div>
  );
}

export default StoreWatchMixin(Cart,ingredients);