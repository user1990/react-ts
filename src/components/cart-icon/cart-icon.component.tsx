import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartIconContainer, CartIconItemCount } from './cart-icon.styles';

interface Props {
  toggleCartHidden?: () => void;
  itemCount?: number;
}

const CartIcon = ({ toggleCartHidden, itemCount }: Props) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <CartIconItemCount>{itemCount}</CartIconItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

const mapStateToProps = createStructuredSelector<any, any>({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
