import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {
  CartDropdownCartItems,
  CartDropdownContainer,
} from './cart-dropdown.styles';

const CartDropdown = () => (
  <CartDropdownContainer>
    <CartDropdownCartItems />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

export default CartDropdown;
