// import { initializeApp } from "firebase/app";
// import { onAuthStateChanged } from "firebase/auth";
// import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { auth } from "../firebase/config";


// interface AuthContextType{
    // currentUser:any;
    // userLoggedIn:Boolean;
    // loading:Boolean;
// }
// interface AuthProviderProps {
    //     children: ReactNode;
    //   }
    // const AuthContext=createContext<AuthContextType|null>(null)
    
    // export function useAuth(){
        //     return useContext(AuthContext)
        // }
        
        // export const AuthProvider:React.FC<AuthProviderProps>=({children})=>{
            //     const [currentUser,setCurrentUser]=useState(null)
            //     const [userLoggedIn,setUserLoggedIn]=useState(false)
            //     const [loading,setLoading]=useState(true)
            //     useEffect(()=>{
                // const unSubscribe=onAuthStateChanged(auth,initializeUser)
                // return unSubscribe;
                //     },[])
                
                //    const initializeUser=async(user)=>{
                    //     if(user){
                        //         setCurrentUser({...user})
                        //         setUserLoggedIn(true)
                        //     }else{
                            //         setCurrentUser(null)
                            //         setUserLoggedIn(false)
                            //     }
                            //     setLoading(false)
                            //    }
                            //    const value={
                                //     currentUser,
                                //     userLoggedIn,
                                //     loading
                                //    }
                                //    return(
                                    // <AuthContext.Provider value={value}>
                                    //     {!loading &&children}
                                    // </AuthContext.Provider>
                                    //    ) 
                                    // }
                                    import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';
import { User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
interface AuthContextProps{
 children:ReactNode;
}

export const AuthContex=createContext<any>(null)
 const AuthContexProvider:React.FC<AuthContextProps>=({children})=>{
    const [user, setUser] = useState<User | null>(null);
    return(
    <AuthContex.Provider value={{user,setUser}}>
        
      {children}
    </AuthContex.Provider>
    ) 
}


export default AuthContexProvider
