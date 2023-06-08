import { createContext, useState } from "react";

export const  authContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig/firebase.config";
const auth = getAuth(app)

const AuthProvider = ({children}) => {
     const user = {
          name: 'saidur rahman'
     }
     const [loading, setLoading] = useState(true)

     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }
     
     const authInfo = {
          user,
          loading,
          createUser
     }
     return (
          <authContext.Provider value={authInfo}>
               {children}
          </authContext.Provider>
     );
};

export default AuthProvider;