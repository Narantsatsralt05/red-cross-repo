import React, { useContext, useState, useEffect } from 'react';
import { addDocument, auth, useCollection, firestore, setDocument } from '../services/firebase';
import { createContext } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import Router, { useRouter } from 'next/router';
import { addDoc, collection } from 'firebase/firestore';
export const AuthContext = createContext({
  user: {},
  login: () => { },
  signUp: () => { },
  logOut: () => { },
  forgetPass: () => { },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loginError, setLoginError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [forgotPassError, setForgotPassError] = useState('');
  const [userData, setUserData] = useState({});
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user?.admin && Object.keys(userData).length != 0 && setDocument(`user/${user?.uid}`, {
        email: userData?.email,
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        uid: user?.uid,
        RD: userData?.RD,
        gender: userData?.gender,
        date: userData?.date,
        location: userData?.location,
        phoneNumber: userData?.phoneNumber,
        admin: false
      })
      setUser(user)
    });
  }, [auth, userData]);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('/checker');
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const signUp = (values) => {
    if (values.phoneNumber && values.password === values.passwordConfirm) {
      createUserWithEmailAndPassword(auth, values?.email, values?.password).then((userCredential) => {
        setUser(userCredential.user)
        setUserData({ ...values });
        router.push('/checker');
      })
    } else {
      alert('buglunuu');
    }
  };
  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        router.push('/login');
        setUser(null);
      })
  };
  const forgetPass = (email, setTrue) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        router.push('/login');
        setTrue(true);
      })
      .catch((error) => {
        setForgotPassError(error.message);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        forgetPass,
        signUp,
        logOut,
        user,
        loginError,
        forgotPassError,
        signUpError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
