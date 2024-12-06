import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

export default function Checkout() {
  const { cart,removeItem } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price , 0).toFixed(2);

  async function payNow(){
    // alert("payment sucessfull", totalAmount);
    let userPayableAmount=totalAmount;
     console.log("payment sucessfull",userPayableAmount);
    let amarPayJson=
    {
      "store_id": "aamarpaytest",
      "tran_id": "asdasdasdasdasd",
      "success_url": "http://www.merchantdomain.com/suc esspage.html",
      "fail_url": "http://www.merchantdomain.com/faile dpage.html",
      "cancel_url": "http://www.merchantdomain.com/can cellpage.html",
      "amount": userPayableAmount,
      "currency": "BDT",
      "signature_key": "dbb74894e82415a2f7ff0ec3a97e4183",
      "desc": "Merchant Registration Payment",
      "cus_name": "Name",
      "cus_email": "payer@merchantcusomter.com",
      "cus_add1": "House B-158 Road 22",
      "cus_add2": "Mohakhali DOHS",
      "cus_city": "Dhaka",
      "cus_state": "Dhaka",
      "cus_postcode": "1206",
      "cus_country": "Bangladesh",
      "cus_phone": "+8801704",
      "type": "json"
  }
        
  const response = await axios.post("http://localhost:3000/paynow", amarPayJson);
  console.log(response.data);
  
 if (response?.data) {
  window.location.href = response.data;
} else {
  console.error('Payment URL is not present in the response');
}
}

  return (
    <div className='bg-gray-100'>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Checkout</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {cart?.map((item) => (
            <div key={item?.id} className="flex items-center border-b py-4">
              <img src={item?.images[0]} alt={item.title} className="w-24 h-24 object-cover mr-4 rounded" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item?.title}</h2>
                <p className="text-gray-600">Category: {item?.category?.name}</p>
                <p className="text-gray-800">Price: ${item?.price.toFixed(2)}</p>
                <p className="text-lg font-bold">Subtotal: ${(item?.price).toFixed(2)}</p>
               
              </div>
              <button onClick={() => removeItem(item.id)}>❌</button>
            </div>
          ))}
          <div className="flex justify-between mt-4 font-semibold">
            <span>Total Amount:</span>
            <span>${totalAmount}</span>
          </div>
          <button onClick={payNow} className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
