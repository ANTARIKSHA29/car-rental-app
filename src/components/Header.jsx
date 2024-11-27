import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                CarRental
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
                    <Nav.Link as={Link} to="/rentals" className="mx-2">Rentals</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
