import { Route,Routes } from "react-router-dom"
import Home from './Pages/Home'; 
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


import { useContext, useEffect } from "react";
import { AuthContex } from "./Store/AuthContext";
import { FirebaseContext } from "./Store/FirebaseContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
function App() {
  const {setUser}=useContext(AuthContex)
  useEffect(()=>{
 onAuthStateChanged(auth,(user)=>{
  setUser(user)
 })
  },[])
  return (
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  );
}

export default App;
