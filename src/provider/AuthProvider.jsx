import { useEffect, useState } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const googleAuthProvider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{displayName:name, photoURL:photo})
  }

  const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  
  const signOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      if (currentUser?.email) {
        const user ={email:currentUser.email}
        axios.post("http://localhost:3000/jwt",user,{withCredentials:true})
        .then(()=>{
          // console.log(res.data)
          setLoading(false)
        })
      }else{
        axios.post("http://localhost:3000/logout",{},{
          withCredentials:true
        })
        .then(()=>{
          // console.log(res.data)
          setLoading(false)
        })
      }
    })
    return ()=>{
      unSubscribe()
    }
  },[])

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    createUser,
    updateUser,
    signInUser,
    signOutUser,
    signInWithGoogle
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;