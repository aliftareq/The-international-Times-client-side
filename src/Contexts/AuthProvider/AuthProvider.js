import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext()

//auth and providers
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    //states
    const [user, setUser] = useState({})

    //handlers
    const signInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const LogOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])

    //the value and function you want to distribute put in authInfo
    const authInfo = { user, setUser, signInwithGoogle, LogOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;