import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDukSpFvQu3OHLtgYGs-xE9wo7lVgsts-M',
  authDomain: 'ecommerce-a0381.firebaseapp.com',
  databaseURL: 'https://ecommerce-a0381.firebaseio.com',
  projectId: 'ecommerce-a0381',
  storageBucket: 'ecommerce-a0381.appspot.com',
  messagingSenderId: '891116801650',
  appId: '1:891116801650:web:4fba1c83c3e946bc30fceb',
  measurementId: 'G-TDCMXZVYL0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign in with google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// create user profile
export const createUserProfile = async (userData, additionalData) => {
  if (!userData) return;

  const userRef = firestore.doc(`users/${userData.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userData;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error found while creating user ', error.message);
    }
  }

  return userRef;
};

export default firebase;
