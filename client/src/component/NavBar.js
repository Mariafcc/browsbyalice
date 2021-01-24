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

<<<<<<< HEAD
class NavBar extends Component{
    render () {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
                <a style={{ color: "#fbaed2", textShadow: "3px 3px black" , fontSize: "75px", fontFamily: 'Cedarville Cursive'}} className='navbar-brand' href='/'>Brows By Alice</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ml-auto'>
                        <a style={{color:"black", fontSize: "25px", fontFamily: 'Cedarville Cursive'}} className='nav-item nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                        <a style={{color:"black", fontSize: "25px", fontFamily: 'Cedarville Cursive'}} className='nav-item nav-link' href='/services'>Services</a>
                        <a style={{color:"black", fontSize: "25px",fontFamily: 'Cedarville Cursive'}} className='nav-item nav-link' href='after-care'>After Care</a>
                    </div>
                </div>
            </div>
        </nav>
    )
=======
>>>>>>> 4385cb2580318ecb72f319483c90643699cb6535
    }

}

export default NavBar;