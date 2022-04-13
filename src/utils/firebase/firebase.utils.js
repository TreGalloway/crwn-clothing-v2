import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_k3MA3kfnToZOl_stqKj1EF2JXQ7erJU',
  authDomain: 'crwn-db-7a3fd.firebaseapp.com',
  projectId: 'crwn-db-7a3fd',
  storageBucket: 'crwn-db-7a3fd.appspot.com',
  messagingSenderId: '972792489554',
  appId: '1:972792489554:web:8f4fd65019ab83a906a18b',
  measurementId: 'G-XR5E7SRWX4',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
