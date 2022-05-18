import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { createContext } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import Router, { useRouter } from 'next/router';

export const AuthContext = createContext({
    user: {},
    login: () => { },
    signUp: () => { },
    logOut: () => { },
    forgetPass: () => { },
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
            console.log(user?.uid)
        });
    }, [auth]);

    const login = (email, password, setTrue) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setTrue(true)
            })
            .catch((error) => {
                setLoginError(error.message);
                setTrue(false)
            });
    };

    const signUp = (values) => {
        if (values.password === values.passwordConfirm) {
            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              console.log(userCredential.user.uid, 'usercred');
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
                console.log('success')
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
                router.push('/login');
                alert("logOut successfully")
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
                setTrue(true)
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
                signUpError
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuthContext = () => {
    return useContext(AuthContext);
};
