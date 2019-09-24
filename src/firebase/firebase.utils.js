import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBx2TvDG34KkZoQY0jiGPrNkTvEMk8KhM4",
  authDomain: "clothing-db-fb22e.firebaseapp.com",
  databaseURL: "https://clothing-db-fb22e.firebaseio.com",
  projectId: "clothing-db-fb22e",
  storageBucket: "clothing-db-fb22e.appspot.com",
  messagingSenderId: "558881351125",
  appId: "1:558881351125:web:4011ee00bb9bc18d"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
