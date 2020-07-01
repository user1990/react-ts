import React from 'react';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Item, State, Cart } from '../../redux/cart/cart.interfaces';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownCartItems,
  CartDropdownContainer,
} from './cart-dropdown.styles';

const stateSelector = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdown = () => {
  const cartItems: Item[] = useSelector(stateSelector).cartItems;

  return (
    <CartDropdownContainer>
      <CartDropdownCartItems />
      {cartItems &&
        cartItems.map(cartItem => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
      {/* <CustomButton>GO TO CHECKOUT</CustomButton> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
