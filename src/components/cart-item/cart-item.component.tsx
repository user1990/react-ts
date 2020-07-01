import React from 'react';

import { Item } from '../../redux/cart/cart.interfaces';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './cart-item.styles';

interface Props {
  item: Item;
  id: string;
}

const CartItem = ({ item: { imageUrl, price, name, quantity } }: Props) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
