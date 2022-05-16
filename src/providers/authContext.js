import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../hooks';
import { createContext } from 'react';
import firebase from 'firebase/compat/app';
import { db } from '../hooks/firebase';

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
        alert('login successfully');
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const signUp = (values) => {
    if (values.password === values.passwordConfirm) {
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((userCredential) => {
          console.log(userCredential.user.uid, 'usercred');
          console.log('signUp amjilttai XD');
            db.collection('user').doc(userCredential.user.uid).set({
              email: values.email,
              RD: values.RD,
              lastName: values.lastName,
              firstName: values.firstName,
            // gender: values.gender,
            // date: values.date,
            // location: values.location,
            // phoneNumber: values.phoneNumber,
          }).then(() => {
            // window.location = '/';
            alert('signUp successfully');
          })
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
        alert('logOut successfully');
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
        alert('та имэйлээ шалгана уу!');
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
