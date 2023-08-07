// ProductList.js

import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {

  return (
    <Row>
      {products.map(product => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <ProductCard product={product} /> 
        </Col>
      ))}
    </Row>
  )
}

export default ProductList;