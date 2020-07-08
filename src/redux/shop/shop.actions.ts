import { ActionTypes } from './shop.types';

export const fetchCollectionsStartAction = () => ({
  type: ActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccessAction = (collectionsMap: any[]) => ({
  type: ActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailureAction = (errorMessage: string) => ({
  type: ActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
