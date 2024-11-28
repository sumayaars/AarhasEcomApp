
import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function Profile() {
  const {loggedUser,setLoggedUser}=useContext(AuthContext);
  const googleUserInfo=JSON.parse(localStorage.getItem("userFromGoogle"));
//  const userInfo=JSON.parse(localStorage.getItem("user"));
//  console.log("from profile page",userInfo);
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/6596/6596121.png";
useEffect(() => {
  const fetchUserInfo = async () => {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      if (userInfo) {
          const userToken = userInfo; 
          if (userToken.access_token) {
              try {
                  const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
                      headers: {
                          Authorization: `Bearer ${userToken.access_token}`,
                      },
                  });
                  setLoggedUser(response.data);
              } catch (error) {
                  console.error("Error fetching user info:", error);
              }
          }
      }
      
  };

  fetchUserInfo();
}, [setLoggedUser]);

  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white  p-10 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={loggedUser?.avatar || googleUserInfo?.
              photoURL
               ||defaultAvatar}
            alt="Profile"
            className="rounded-full h-32 w-32 mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{loggedUser?.name ||googleUserInfo?.displayName}</h2>
          <p className="text-gray-600">{loggedUser?.email || googleUserInfo?.email}</p>
          <p className="text-gray-500">{loggedUser?.role}</p>
          <p> <NavLink to='/' className="text-blue-500  hover:underline ">  Go Home </NavLink></p>

          
        </div>
      </div>
    </div>
    </>
  )
}
