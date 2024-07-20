import React from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useContext } from 'react';
import { AuthContex } from '../../Store/AuthContext';
import { SignOut } from '../../firebase/config';
import { Navigate, useNavigate } from 'react-router-dom';
function Header() {
  const navigate=useNavigate()
  const {user}=useContext(AuthContex)
  // console.log(helo)
  const handleLogOut=async()=>{
  await SignOut();
  navigate('/login')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo/>
        </div>
        <div className="placeSearch">
          <Search color=''/>
          <input type="text" />
          <Arrow/>
        </div>
        <div className="productSearch">
          <div className="input">
            <input 
            className='px-3'
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"/>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <span className='underline'>{user ? user.email : 'Login'}</span>
        <span className='text-white bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 mx-3 p-3' onClick={handleLogOut}>Logout</span>
    
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
