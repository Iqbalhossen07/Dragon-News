import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Pages/Firebase/Firebase.config";
import swal from 'sweetalert';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [showEmail,setShowEmail] = useState(null)
    const [loading,setLoading] = useState(true)

   const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
   }
   const signUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
   }

   useEffect(()=>{
    const unsubScribe = onAuthStateChanged(auth,user=>{
        setLoading(false)
        setShowEmail(user)
    })
    return ()=>{
        unsubScribe()
    }
   },[])

   const logOut = ()=>{
    setLoading(true)
   return signOut(auth)
   }



    const userInfo = {
        createUser,
        signUser,
        showEmail,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;