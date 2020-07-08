export const ActionTypes = {
  FETCH_COLLECTIONS_START: '[SHOP] FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: '[SHOP] FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE: '[SHOP] FETCH_COLLECTIONS_FAILURE',
};

export interface FetchCollectionStartAction {
  type: typeof ActionTypes.FETCH_COLLECTIONS_START;
  payload: any;
}

export interface FetchCollectionSuccessAction {
  type: typeof ActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: any;
}

export interface FetchCollectionFailedAction {
  type: typeof ActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: any;
}

export type ShopActionTypes =
  | FetchCollectionStartAction
  | FetchCollectionSuccessAction
  | FetchCollectionFailedAction;
