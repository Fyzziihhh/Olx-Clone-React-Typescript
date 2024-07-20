import React, { useState } from "react";
import { CreateUser, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isRegisteredIn, setIsRegisteredIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!isRegisteredIn) {
        const { user } = await CreateUser(email, password);
        setIsRegisteredIn(true);
        console.log('User signed up successfully:', user);

        await setDoc(doc(db, 'users', user.uid), {
          id: user.uid,
          username: userName,
          phone: phoneNumber 
        });

        navigate('/login'); 
      }
    } catch (error) {
      console.error('Failed to create account:', error);
      alert(`Failed to create account: ${error}`);
      setError(`Failed to create account: ${error}`);
    }
  };

  return (
    <div className="flex items-center mt-20 justify-center border-spacing-1">
      <div className="signupParentDiv px-10 py-5 flex items-center justify-center">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            type="text"
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button className="rounded-md bg-gray-700 hover:bg-slate-600" type="submit">
            Signup
          </button>
          <Link to={'/login'}>Login</Link>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
