import { createContext, useEffect, useState } from "react";

export const  authContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from "../firebaseConfig/firebase.config";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
     const [user, setUser] = useState('')
     const [loading, setLoading] = useState(true)

     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const signIn = (email, password) =>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     const googleSignIn = ()=>{
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
     }

     const updateUserProfile = (name, photoUrl) => {
          setLoading(true)
         return updateProfile(auth.currentUser, {
               displayName: name,
               photoURL: photoUrl
          })
          
     }
     const logOut = () =>{
          setLoading(true)
          return signOut(auth)
     }
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser)
               console.log(currentUser)
               setLoading(false)
          })
          return () =>{
               unsubscribe;
          }
          
     }, [])
     
     const authInfo = {
          user,
          loading,
          createUser,
          updateUserProfile,
          logOut,
          signIn,
          googleSignIn
     }
     return (
          <authContext.Provider value={authInfo}>
               {children}
          </authContext.Provider>
     );
};

export default AuthProvider;