import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({productInfo}) {
  const{id,title,price,images,category,description}=productInfo;
  return (
    <>
    <NavLink to={`/shop/product/${id}`}>
    <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src={images[0]}
            
            alt=""
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{title}</h2>
          <p className="text-slate-500 font-medium">{description.slice(0,40)}</p>
          <p className="text-gray-800 font-bold">${price}</p>
          <p className="text-gray-600 font-bold">{category.name}</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            view Product
          </button>
        </div>

    </NavLink>
    </>
  )
}
