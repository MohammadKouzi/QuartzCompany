import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expanded={expanded} expand="md lg" className="HeaderBar">
      <Container fluid>
        <Navbar.Brand href="#" className="HeaderItem">Company Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" className='headerLink'>Home</Nav.Link>
            <NavDropdown title="Materials" className='headerLink'>
              <NavDropdown.Item as={NavLink} to="/glass">Glass</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/quartz">Quartz</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/marble">Marble</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/services" className='headerLink'>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className='headerLink'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className='headerLink'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
