import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavItem } from 'react-bootstrap';

function Navigation() {
    const currentPage = useLocation().pathname;
  
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1oQpE4NUbp9sn4uWrQapSGOHx1tDGAjiB/view?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default Navigation;