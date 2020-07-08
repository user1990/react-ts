import { Item } from './cart.interfaces';

export const addItemToCart = (cartItems: Item[], cartItemToAdd: Item) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems: Item[], cartItemToAdd: Item) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
