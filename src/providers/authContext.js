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
<<<<<<< HEAD
        window.location = '/';
=======
<<<<<<< HEAD
        window.location = '/home';
        alert('login successfully');
=======
        window.location = '/';
>>>>>>> 32ef143 (update)
>>>>>>> 0835158 (update)
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
<<<<<<< HEAD
          // window.location = '/home';
=======
<<<<<<< HEAD
          window.location = '/home';
          alert('signUp successfully');
=======
          // window.location = '/home';
>>>>>>> 32ef143 (update)
>>>>>>> 0835158 (update)
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
    auth
      .signOut()
      .then(() => {
        window.location = '/login';
        alert("logOut successfully")
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const forgetPass = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("та имэйлээ шалгана уу!")
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
        forgotPassError,
<<<<<<< HEAD
        signUpError
=======
<<<<<<< HEAD
=======
        signUpError
>>>>>>> 32ef143 (update)
>>>>>>> 0835158 (update)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
