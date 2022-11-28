import React, { children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
    const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data[0]))
    }, [user?.uid])

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        providerLogin,
        logOut,
        userInfo,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;