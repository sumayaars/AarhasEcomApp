import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Components/Loading';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebase';
import { AuthContext } from '../context/AuthContext';

const provider = new GoogleAuthProvider();
export default function Login() {
  const{setGoogleUser,setLoggedUser}=useContext(AuthContext)
  const {setUserToken}=useContext(AuthContext);
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();
  const navigatation=useNavigate();
 
   const {
    register,
    handleSubmit,
reset
  } = useForm()
  async function onSubmit(data){
    setLoading(true);
     try {
     const response= await axios.post("https://api.escuelajs.co/api/v1/auth/login",data);
       const userInfo = response.data;
       // setLoginInfo(userInfo); 
        setUserToken(userInfo);
       setLoading(false);
       reset();
      navigatation("/shop");
      toast.success("Login Successfull");
     } catch (error) {
       console.error(error);
     }
     }
  
  function loginWithGoogle(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    setGoogleUser(user);
    localStorage.setItem("userFromGoogle",JSON.stringify(user));
    navigate("/shop");
    toast.success("login Successfully");
    
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
   
  });

  }
  // const {setUserToken}=useContext(AuthContext);
  // const [loading, setLoading]=useState(false);
  // const navigate=useNavigate();
 
 
  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-slate-700 text-white py-2 rounded hover:bg-slate-900 mb-4"
          >
            {
              loading? <Loading/>:"Sign In"
            }
          </button>
        </form>
        <div className="flex items-center justify-between mb-4">
          <hr className="w-full" />
          <span className="text-gray-500 mx-2">or</span>
          <hr className="w-full" />
        </div>
        <button onClick={loginWithGoogle} className="flex items-center gap-2 justify-center w-full text-blue-500 text-white py-2 rounded hover:bg-slate-200 mb-4">
        <FcGoogle />

      <span className="text-gray-700">Sign in with Google</span>
    </button>
        <p className="text-center text-gray-600">
          Don’t have an account?{' '}
          <NavLink to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
    </>
  )
}
