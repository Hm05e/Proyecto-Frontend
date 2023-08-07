// useAddToCart.js

import { useContext } from 'react';

import CartContext from '../../contexts/CartContext';


export default function useAddToCart() {

  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {

    setCart([
      ...cart,
      {
        ...product, 
        quantity: 1
      }  
    ]);

  };

  return { 
    addToCart 
  };

}