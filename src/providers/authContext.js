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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location = '/';
        console.log('login amjilttai XD');
      })
      .catch((error) => {
        console.log(error);
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
      });
    } else {
      console.log('repeat pass buruu bn!!!');
    };

  };
  const logOut = () => {
    auth.signOut();
    console.log('logOut amjilttai XD');
  };
  const forgetPass = (email) => {
    auth.sendPasswordResetEmail(email);
    console.log('forgotPass amjilttai XD');
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        forgetPass,
        signUp,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
