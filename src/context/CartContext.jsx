import { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function removeItem(productId) {
    const updatedCart = cart.filter((item) => item.id !== productId); // Assuming `id` is unique to each product
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

 
  function cartItem(product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  }

 
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, cartItem,setCart,removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
