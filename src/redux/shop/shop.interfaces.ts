import { Item } from '../cart/cart.interfaces';

export interface Collection {
  id: string;
  items: Item[];
  routerName: string;
}

export interface ShopState {
  collections: Collection[];
  isFetching: boolean;
  errorMessage: string;
}
