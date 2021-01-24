import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';

class NavBar extends Component {
    render() {
        return (
            <Navbar style={{ backgroundColor: "#ffe4e1", width: "100%" }} expand="lg">
                <Navbar.Brand style={{ color: "#fbaed2", textShadow: "3px 3px black" , fontSize: "50px", fontFamily: 'Cedarville Cursive'}} href="#home">Brows By Alice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ color: "black", fontSize: "25px", fontFamily: 'Cedarville Cursive'}} className="mr-auto">
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