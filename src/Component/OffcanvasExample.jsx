import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.png';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';


function OffcanvasExample() {
  const expand = 'lg'; // Set the desired expand value

  return (
    <Navbar expand={expand} className="bg-#252525 mb-3 w-100">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          className="menu-icon" // Add the menu-icon class
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          style={{ backgroundColor: '#252525' }}
        >
          <Offcanvas.Header closeButton>
            <Link to="/">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={Logo} alt="" />
              </Offcanvas.Title>
            </Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/" className="nav-link" id="whiat">
                Home
              </Link>
              <Link to="/categories" className="nav-link" id="whiat">
                Categories
              </Link>
              <Link to="/contant" className="nav-link" id="whiat">
                About
              </Link>
              <Link to="/contant" className="nav-link" id="whiat">
                Contact Us
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
            <Link className='user'>
              <AiOutlineUser/>            
            </Link>
            <Link className='user'>
              <AiOutlineShoppingCart/>            
            </Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
