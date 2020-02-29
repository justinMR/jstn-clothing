import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyWoisYeEmiNuzI0U-MogzbRwqmaOy61U",
  authDomain: "jstn-clothing-db-7f0d2.firebaseapp.com",
  databaseURL: "https://jstn-clothing-db-7f0d2.firebaseio.com",
  projectId: "jstn-clothing-db-7f0d2",
  storageBucket: "jstn-clothing-db-7f0d2.appspot.com",
  messagingSenderId: "79765526079",
  appId: "1:79765526079:web:5b872762a68eb6343a8a8a"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
