import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext()

//auth and providers
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    //states
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    //handlers
    //1
    const signInwithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //2
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //3
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //4
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //5 
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    //
    const LogOut = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    //the value and function you want to distribute put in authInfo
    const authInfo = {
        user,
        error,
        loading,
        setUser,
        signInwithGoogle,
        createUser,
        signInWithEmail,
        LogOut,
        setError,
        updateUserProfile,
        varifyEmail,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;