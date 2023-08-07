// Products.js

import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();

  }, []);

  return (
    <Row>
      {products.map(product => (
        <Col key={product.id}>
          <ProductCard product={product} />
        </Col>  
      ))}
    </Row>
  );

}

export default Products;