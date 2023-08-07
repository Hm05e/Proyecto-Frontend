// Footer.js

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

  return (
    <footer>
      <Container>
        <Row>
          
          <Col className="text-center py-3">
            Copyright &copy; MiTiendaOnline
          </Col>
          
          <Col md="3">
            <h5>Categorias</h5>
            <ul className="list-unstyled">
              <li><a href="#">Tecnologia</a></li> 
              <li><a href="#">Muebles</a></li>
              <li><a href="#">Dormitorio</a></li>
              <li><a href="#">Deportes</a></li>
              <li><a href="#">Zapatos</a></li>
              <li><a href="#">Accesorios</a></li>
              <li><a href="#">Jugueteria</a></li>
              <li><a href="#">Electrohogar</a></li>
            </ul>
          </Col>

          <Col md="3">
            <h5>Informacion</h5>
            <ul className="list-unstyled">
              <li><a href="#">Acerca de nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Politicas de privacidad</a></li>
            </ul>
          </Col>

          <Col md="3">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
          
        </Row>
      </Container>
    </footer>
  )

}

export default Footer;