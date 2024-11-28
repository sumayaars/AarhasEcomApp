import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { userToken, loggedUser, setLoggedUser, googleUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const googleUserInfo = JSON.parse(localStorage.getItem('userFromGoogle'));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      if (userInfo && userInfo.access_token) {
        try {
          const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: {
              Authorization: `Bearer ${userInfo.access_token}`,
            },
          });
          setLoggedUser(response.data);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      }
    };

    fetchUserInfo();
  }, [setLoggedUser]);

  function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userFromGoogle');
    localStorage.removeItem('cart');
    setLoggedUser(null);
    navigate('/');
  }

  return (
    <div className="navbar bg-slate-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-active btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
          >
            {!loggedUser && !googleUserInfo ? (
              <>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Sign Up</NavLink></li>
              </>
            ) : (
              <>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/checkout">Checkout</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-white font-bold">AARHAS</a>
      </div>
      <div className="navbar-end">
        <div className="flex-none flex items-center">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-active btn-outline indicator transparent-bg">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cart.length}</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow z-50">
              <div className="card-body">
                <div className="card-actions">
                  <NavLink to="/checkout">
                    <button className="btn btn-ghost hover:bg-blue-400 btn-block">View Items</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {(loggedUser || googleUserInfo) && (
            <div className="dropdown dropdown-end ml-2">
              <div tabIndex={0} role="button" className="btn btn-active btn-outline avatar transparent-bg">
                <div className="w-8 rounded-full">
                  <img
                    alt="User Avatar"
                    src={loggedUser?.avatar || googleUserInfo?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
                <li>
                  <NavLink to="/profile" className="justify-between">
                    {loggedUser?.name || googleUserInfo?.displayName || 'Profile'}
                  </NavLink>
                </li>
                <li className="ml-3 cursor-pointer" onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
