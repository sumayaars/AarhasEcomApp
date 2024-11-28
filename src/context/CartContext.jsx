import { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to update the cart and save it to localStorage
  function cartItem(product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));  // Save to localStorage
  }

  // Sync cart changes with localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, cartItem }}>
      {children}
    </CartContext.Provider>
  );
}
