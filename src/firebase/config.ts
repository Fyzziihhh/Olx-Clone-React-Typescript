import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAg_oBGbVUAasXmRZwm3JsyR1c-jbxYYhY",
    authDomain: "olx-clone-typescript.firebaseapp.com",
    projectId: "olx-clone-typescript",
    storageBucket: "olx-clone-typescript.appspot.com",
    messagingSenderId: "690757605848",
    appId: "1:690757605848:web:745092f8231ddc3a637aad"
  };



const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const CreateUser = async (email: string, password: string) => {
 return createUserWithEmailAndPassword(auth,email,password)
};
 export const SignIn=(email:string,password:string)=>{
return signInWithEmailAndPassword(auth,email,password)
 }
 export const SignOut=()=>{
    return auth.signOut();
 }


export default firebaseApp

