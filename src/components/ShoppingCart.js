// ShoppingCart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from './contexts/CartContext';

const { cart, setCart } = useContext(CartContext); 


import { Table, Button } from 'react-bootstrap';

const ShoppingCart = ({ cart }) => {

  const [items, setItems] = useState(cart);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('/api/cart');
      setItems(response.data);
    } 
    fetchCart();
  }, []);

  const removeFromCart = async (item) => {
    await axios.delete(`/api/cart/${item.id}`);
    setItems(items.filter(i => i.id !== item.id)); 
  }

  const updateQuantity = async (item, quantity) => {
    await axios.put(`/api/cart/${item.id}`, {
      quantity: quantity
    });
    setItems(items.map(i => {
      if (i.id === item.id) {
        return {
          ...i,
          quantity: quantity
        };
      } else {
        return i;
      }
    }));
  } 

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th> 
          <th>Total</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${item.quantity * item.price}</td> 
            <td>
              <Button onClick={() => removeFromCart(item)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <th colSpan="3">Total:</th>
          <td>${getTotal()}</td>
        </tr>  
      </tfoot>

    </Table>
  )
}

export default ShoppingCart;