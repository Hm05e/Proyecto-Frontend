// Header.js

import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar término de búsqueda
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">MiTiendaOnline</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Tecnología</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Muebles</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Dormitorio</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Deportes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Zapatos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Juguetería</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Electrohogar</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form onSubmit={handleSubmit} inline>
          <FormControl 
            type="text" 
            placeholder="Buscar productos" 
            value={search}
            onChange={handleSearch}
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>

      </Navbar.Collapse>

    </Navbar>
  )
}

export default Header;