import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../hooks';
import { createContext } from 'react';
import firebase from 'firebase/compat/app';

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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location = '/home';
        console.log('login amjilttai XD');
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const signUp = (email, password1, password2) => {
    if (password1 === password2) {
      auth
        .createUserWithEmailAndPassword(email, password1)
        .then(() => {
          // window.location = '/';
          console.log('signUp amjilttai XD');
        })
        .catch((error) => {
          console.log(error.message);
          setSignUpError(error.message);
        });
    } else {
      console.log('repeat pass buruu bn!!!');
    }
  };
  const logOut = () => {
    auth.signOut();
    console.log('logOut amjilttai XD');
  };
  const forgetPass = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('forgotPass amjilttai XD');
        window.location = '/login';
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
        forgotPassError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
