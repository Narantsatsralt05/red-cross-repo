import React from 'react';
import { auth } from '../hooks';
import { createContext } from 'react';

export const AuthContext = createContext({
  user: {},
  login: () => {},
});

export const AuthProvider = ({ children }) => {
  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location = '/';
      })
      .catch((error) => {
        setLoginError(error.message);
        console.log(error);
      });
  };
  const forgetPass = (email) => {
    auth.sendPasswordResetEmail(email);
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        forgetPass,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
