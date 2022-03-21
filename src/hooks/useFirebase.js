import initiaLizeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from 'react';

initiaLizeFirebase();

const useFirebase =()=>{
      const [user,setUser]= useState({});
      const [isLoading,setIsLoading]= useState(true);
      const [authError, setAuthError] = useState('');

      const auth = getAuth();

      const registerUser =(email,password)=>{
          setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                
                setAuthError(error.message);
                
            })
            .finally(()=>setIsLoading(false))
            ;

      };

     

      const loginUser=(email,password)=>{
          setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
      }

      //observe user state
      useEffect(()=>{
       const  unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
           
              const uid = user.uid;
              setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe;
      },[])

      const logout =()=>{
          setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
      };

      return {
          user,
          isLoading,
          registerUser,
          authError,
          loginUser,
          logout,
      }
}

export default useFirebase;

