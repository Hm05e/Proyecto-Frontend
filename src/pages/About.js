// About.js

import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {

  return (
    <>
      
      <Header />

      <Container>
        <Row>
          <Col>
            <h1>Sobre Nosotros</h1>
            <p>
              Información sobre la empresa...
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />

    </>
  )
}

export default About;