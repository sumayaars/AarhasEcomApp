import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import Loading from '../Components/Loading';

export default function Register() {
  const [user, setUser]=useState();
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()
 async function registerOnSubmit(userData){
  try {
    setLoading(true);
  const response=await axios.post("https://api.escuelajs.co/api/v1/users/",userData);
  const data = response.data;
  console.log(data);
  setUser(response.data);
  setLoading(false);
   reset();
   toast.success("Sign Up Successfully")
   navigate("/login");

    
  } catch (error) {
    console.log(error);
    
  }
  }
  return (
   <>
   <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg mt-10 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(registerOnSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
            {...register("name")}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
             {...register("password")}
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="role">
              Role
            </label>
            <select
             {...register("role")}
              id="role"
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select your role</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="avatar">
              Avatar
            </label>
            <input
             {...register("avatar")}
              type="text"
              id="avatar"
              className="w-full border border-gray-300 rounded"
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-2 rounded hover:bg-slate-900"
          >
             {
              loading? <Loading/>:"Sign Up"
            }
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Log In
          </NavLink>
        </p>
      </div>
    </div>
   </>
  )
}
