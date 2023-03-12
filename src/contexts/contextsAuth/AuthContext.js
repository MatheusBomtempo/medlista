import { createContext, useEffect, useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from "../../firebase";

const UserContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState({});  

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
       const signIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password)
       }
    
      const logout = () => {
          return signOut(auth)
      }
    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn }}>
        {children}
        </UserContext.Provider>
    );
}

export { AuthProvider };

export const UserAuth = () => {
    return useContext(UserContext);
  };
