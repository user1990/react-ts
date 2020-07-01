export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface State {
  hidden: boolean;
  cartItems: Item[];
}

export interface Cart {
  cart: State;
}
