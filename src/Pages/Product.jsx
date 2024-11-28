import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Loading from '../Components/Loading';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { CartContext } from '../context/CartContext';

export default function Product() {
  const{cartItem}=useContext(CartContext);
  const checkGoogleUser=localStorage.getItem("userFromGoogle");
  const checkUser=localStorage.getItem("user");
  const [singleProduct,setSingleProduct]=useState(null);
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();
  const{id}=useParams();

  async function fetchSingleProduct() {
    setLoading(true);
    const response=await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    setSingleProduct(response.data);
    setLoading(false);
  }
  useEffect(() => {
   fetchSingleProduct();
  }, [])
  
  function addToCart(product) {
    if ( checkGoogleUser || checkUser) {
      
      cartItem(product);
      toast.success("Product Added to the Cart");
     
    } else {
      navigate("/login");
      toast.error("You have to log in first.");
    }
  }
  
  return (
   <>
   {
    loading && <Loading/>
   }
<div className='bg-gray-100'>
<div className="max-w-2xl mx-auto p-4">
   
   <Swiper spaceBetween={10} pagination={{ clickable: true }} className="mb-4">
     {singleProduct?.images.map((image, index) => (
       <SwiperSlide key={index}>
         <img src={image} alt={`Product Image ${index + 1}`} className="w-full h-auto rounded-lg" />
       </SwiperSlide>
     ))}
   </Swiper>
   <div className="bg-white shadow-md rounded-lg p-6">
   <h1 className="text-2xl font-bold mb-4">{singleProduct?.title}</h1>
     <p className="text-lg font-semibold">Price: ${singleProduct?.price}</p>
     <p className="mt-2 text-gray-700">{singleProduct?.description}</p>
     <p className="mt-2 text-gray-600">Category: {singleProduct?.category?.name}</p>
     <button onClick={()=>addToCart(singleProduct)} className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
       Add to Cart
     </button>
   </div>
 </div>
</div>
   </>
  )
}
