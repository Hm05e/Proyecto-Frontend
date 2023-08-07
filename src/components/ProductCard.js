// ProductCard.js

import { useState, useEffect } from 'react';
import axios from 'axios'; 

import { Card, Button } from 'react-bootstrap';

import useAddToCart from './hooks/useAddToCart';

const ProductCard = ({ productId }) => {

  const [product, setProduct] = useState({});

  const { addToCart } = useAddToCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${productId}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [productId]);
   

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
      
        <Button onClick={() => addToCart(product)}>
          Add to Cart
        </Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;