import { createContext, ReactNode } from "react";
import Firebase from "../firebase/config";
import type { FirebaseApp } from "firebase/app";
export const FirebaseContext=createContext<FirebaseApp | null>(null)

export const FirebaseContextProvider=({children}:{children:ReactNode})=>{
    return <FirebaseContext.Provider value={Firebase}>
{children}
    </FirebaseContext.Provider>
}

