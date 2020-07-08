import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownCartItems,
  CartDropdownContainer,
} from './cart-dropdown.styles';
import { State, Item } from '../../redux/cart/cart.interfaces';

const stateSelector = createStructuredSelector<State, typeof selectCartItems>({
  cartItems: selectCartItems,
});

const CartDropdown = () => {
  const cartItems = useSelector(stateSelector).cartItems;

  return (
    <CartDropdownContainer>
      <CartDropdownCartItems />
      {cartItems &&
        cartItems.map((cartItem: Item) => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
      {/* <CustomButton>GO TO CHECKOUT</CustomButton> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
