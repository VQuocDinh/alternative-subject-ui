import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LogoIcon from '../../../assets/icons/logo';
import { PATH_HOME } from '../../routes/path';
import './index.scoped.scss';

const HomeNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className="py-3 w-50">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <LogoIcon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='w-100'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={PATH_HOME.prescription.root}>Prescriptions</Nav.Link>
            <Nav.Link as={Link} to={PATH_HOME.prescription}>Appointment</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2">Book now</Button>
            <Button variant="outline-secondary" onClick={() => navigate('/auth/login')}>
              Log in
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;