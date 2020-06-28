import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAbIW64PQUJiT_dRET92Ah3P6IeSO74EvU',
  authDomain: 'crwn-db-51ee1.firebaseapp.com',
  databaseURL: 'https://crwn-db-51ee1.firebaseio.com',
  projectId: 'crwn-db-51ee1',
  storageBucket: 'crwn-db-51ee1.appspot.com',
  messagingSenderId: '476082954349',
  appId: '1:476082954349:web:6d8b01fccbc8ba989b9f64',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any,
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
