// Home.js

import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductList from '../components/ProductList';

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamado a API para obtener productos  
  }, []);

  return (
    <Container>

      {/* Sección Hero */}
      <Row>
        <Col>
          <h1>Bienvenidos a mi tienda</h1>
          <p>Encuentra todo lo que necesitas aquí</p>
          <Button variant="primary">Explorar productos</Button>
        </Col>
      </Row>

      {/* Sección Productos Destacados */}
      <h2 className="mt-5">Productos Destacados</h2>
      <ProductList products={products}/>
      
      {/* Sección Final */}
      <Row className="mt-5 text-center">
        <Col>
          <p>Visita nuestra tienda y encuentra lo mejor</p>
          <Button variant="primary">Ver más</Button> 
        </Col>
      </Row>

    </Container>
  );

}

export default Home;