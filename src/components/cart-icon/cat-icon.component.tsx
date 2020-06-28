import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import { CartIconContainer, CartIconItemCount } from './car-icon.styles';

interface Props {
  toggleCartHidden: () => void;
}

const CartIcon = ({ toggleCartHidden }: Props) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <CartIconItemCount>0</CartIconItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
