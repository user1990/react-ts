import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { Item, State } from '../../redux/cart/cart.interfaces';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';

// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
const stateSelector = createStructuredSelector<State, typeof selectCartItems>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export const CheckoutPage = () => {
  const { cartItems, total } = useSelector(stateSelector);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem: Item) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      {/* <StripeCheckoutButton price={total} /> */}
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
