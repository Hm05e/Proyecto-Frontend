// CartContext.js

import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const contextValue = {
    cart,
    setCart
  };

  return (
    <CartContext.Provider value={contextValue}>  
      {children}
    </CartContext.Provider>
  );

}