// ProductDetail.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './contexts/CartContext';

const { cart, setCart } = useContext(CartContext); 



const ProductDetail = ({ productId }) => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [productId]);

  const addToCart = () => {
    setCart([
      ...cart, 
      {
        ...product,
        quantity: 1
      }
    ]);
  }

  return (
    <Card className="product-detail">
      <Card.Img variant="top" src={product.image} />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>

        <Button onClick={addToCart}>
          Agregar al Carrito
        </Button>
        
      </Card.Body>
    </Card>
  )

}

export default ProductDetail;