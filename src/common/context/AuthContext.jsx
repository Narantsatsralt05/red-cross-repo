import React, { useContext, useState, useEffect } from 'react';
import { addDocument, auth, useCollection, firestore, setDocument } from '../services/firebase';
import { createContext } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import Router, { useRouter } from 'next/router';
import { addDoc, collection } from 'firebase/firestore';

export const AuthContext = createContext({
  user: {},
  login: () => {},
  signUp: () => {},
  logOut: () => {},
  forgetPass: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [forgotPassError, setForgotPassError] = useState('');
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  const login = (email, password, setTrue) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setTrue(true);
      })
      .catch((error) => {
        setLoginError(error.message);
        setTrue(false);
      });
  };

  const signUp = async (values) => {
    if (values.password === values.passwordConfirm) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        console.log(user);
        setDocument(`user/${user.uid}`, {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          uid: user.uid,
          RD: values.RD,
          gender: values.gender,
          date: values.date,
          location: values.location,
          phoneNumber: values.phoneNumber,
        });
        console.log('saved');
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('repeat pass buruu bn!!!');
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
        console.log(error.message);
      });
  };
  const forgetPass = (email, setTrue) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        router.push('/login');
        setTrue(true);
      })
      .catch((error) => {
        console.log(error.message);
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
