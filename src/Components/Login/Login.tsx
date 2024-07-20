import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../Store/FirebaseContext'
import { SignIn } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const Firebase =useContext(FirebaseContext)
  console.log(Firebase)
  const navigate=useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Ensure email and password are not empty
      if (!email || !password) {
        throw new Error('Email and Password are required');
      }
      
      // Attempt to sign in
      await SignIn(email, password);
      console.log('User signed in successfully');
      
      // Navigate to the home page upon successful login
      navigate('/');
    } catch (error) {
      console.error('Failed to sign in:', error);
      alert(`Failed to sign in: ${error}`);
    }
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(event)=>setEmail(event?.target.value)}
       
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event)=>setPassword(event?.target.value)}
       
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>SignUp</Link>
      
      </div>
    </div>
  );
}

export default Login;
