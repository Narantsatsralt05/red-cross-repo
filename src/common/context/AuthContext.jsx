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
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('/checker');
        alert('login successfully');
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const signUp = (values, setUser) => {
    if (values.phoneNumber && values.password === values.passwordConfirm) {
      createUserWithEmailAndPassword(auth, values?.email, values?.password).then(() => {
        setDocument(`user/${user?.uid}`, {
          email: values?.email,
          firstName: values?.firstName,
          lastName: values?.lastName,
          uid: user?.uid,
          RD: values?.RD,
          gender: values?.gender,
          date: values?.date,
          location: values?.location,
          phoneNumber: values?.phoneNumber,
        });
        router.push('/checker');
        setUser(true)
      }).catch((el) => console.log(el));
    } else {
      alert('buglunuu');
    }
  };
  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        router.push('/login');
        alert('logOut successfully');
        setUser(null);
      })
      .catch((error) => {
      });
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
