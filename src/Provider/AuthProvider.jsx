import { createContext, useEffect, useState } from "react";

export const  authContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import app from "../firebaseConfig/firebase.config";
const auth = getAuth(app)

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
     }
     return (
          <authContext.Provider value={authInfo}>
               {children}
          </authContext.Provider>
     );
};

export default AuthProvider;