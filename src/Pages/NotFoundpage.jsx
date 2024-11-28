import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFoundpage() {
  return (
    <>
     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">The page you are looking for doesn't exist.</p>
        <NavLink
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go Home
        </NavLink>
      </div>
    </div>
    </>
  )
}
