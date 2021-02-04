import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

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
                        <Nav.Link href="/forms">Forms</Nav.Link>
                        {/* <Nav.Link href="#link">Policy and FAQ</Nav.Link> */}
                        <Nav.Link href="/aftercare">After Care</Nav.Link>
                    </Nav>
                        <a href="https://www.instagram.com/brows.by.alice/?igshid=gz8d6g70lsza" target="_blank"><FaInstagram style={{ height: "40px", width: "40px", color: "white", float:"right" }} /> </a>
                        <a href="https://www.google.com/maps/place/Brows+by+Alice/@42.125594,-87.8361676,13z/data=!4m5!3m4!1s0x0:0xdf5e400ffa6f6705!8m2!3d42.125594!4d-87.8361676" target="_blank"><FaMapMarkerAlt style={{ height: "40px", width: "40px", color: "white", float:"right"  }} /> </a>
                </Navbar.Collapse>

            </Navbar>


        )

    }

}

export default NavBar;