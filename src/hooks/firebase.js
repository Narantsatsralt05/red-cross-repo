import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA55oxgyOBRJ1pj_YN5H2d7fPE0yRdEXLE',
  authDomain: 'red-cross-c2f5d.firebaseapp.com',
  projectId: 'red-cross-c2f5d',
  storageBucket: 'red-cross-c2f5d.appspot.com',
  messagingSenderId: '767166837764',
  appId: '1:767166837764:web:dfce6a759e90c385d7b151',
  measurementId: 'G-W88D1P6H1V',
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();