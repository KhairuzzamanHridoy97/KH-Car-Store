import initiaLizeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,updateProfile} from "firebase/auth";
import {useEffect, useState} from 'react';

initiaLizeFirebase();

const useFirebase =()=>{
      const [user,setUser]= useState({});
      const [isLoading,setIsLoading]= useState(true);
      const [authError, setAuthError] = useState('');
      const [admin, setAdmin] = useState(false);

      const auth = getAuth();

      const googleProvider = new GoogleAuthProvider();

      const registerUser =(email,password,name,history)=>{
          setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email,displayName:name};
                setUser(newUser);
                //send name firebase after creation 
               // save user to the database
               saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                  displayName:name
                }).then(() => {                  
                }).catch((error) => {
                  
                });
                history.replace('/')
            })
            .catch((error) => {
                
                setAuthError(error.message);
                
            })
            .finally(()=>setIsLoading(false))
            ;

      };

     

      const loginUser=(email,password,location,history)=>{
          setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const destination= location?.state?.from || '/';
          history.replace(destination)
          setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
      };


      // google sign in 
      const googleSignIn =(location,history)=>{
          setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
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
      },[]);

      useEffect(() => {
        fetch(`https://salty-cliffs-58044.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

      const logout =()=>{
          setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
      };

      const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };





      return {
          user,
          isLoading,
          registerUser,
          googleSignIn,
          admin,
          authError,
          loginUser,
          logout,
      }
}

export default useFirebase;

