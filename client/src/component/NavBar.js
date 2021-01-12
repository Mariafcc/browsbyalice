import React, { Component } from "react";

class NavBar extends Component{
    render () {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
                <a style={{color:"black"}}className='navbar-brand' href='/'>Brows By Alice</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav ml-auto'>
                        <a style={{color:"black"}} className='nav-item nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                        <a style={{color:"black"}} className='nav-item nav-link' href='/services'>Services</a>
                        <a style={{color:"black"}} className='nav-item nav-link' href='after-care'>After Care</a>
                    </div>
                </div>
            </div>
        </nav>
    )
    }
}

export default NavBar;