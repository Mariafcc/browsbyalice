import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';




class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Brows By Alice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Brows and more" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/services">Brows</NavDropdown.Item>
                            <NavDropdown.Item href="/services#lashes">Lashes</NavDropdown.Item>
                            <NavDropdown.Item href="/services#makeup">Makeup</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        )

    }

}

export default NavBar;