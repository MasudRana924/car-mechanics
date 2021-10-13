import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.initialize';
initializeAuthentication()
const useFirebase = () => {
    const [user, setUsers] = useState({})
    const [isLoading,setIsLoading]=useState(true)

    const auth = getAuth()
    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)
            })
            .finally(()=>
                setIsLoading(false)
            )
    }
    useEffect(()=>{
   const unsubscribed=     onAuthStateChanged(auth, (user) => {
            if (user) {
              setUsers(user)
            } else {
             setUsers({})
            }
            setIsLoading(false)
          });
          return()=>unsubscribed;
    },[])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(()=>
                setIsLoading(false)
            )
    }
    return {
        user, googleSignIn, logOut,isLoading
    }
}
export default useFirebase