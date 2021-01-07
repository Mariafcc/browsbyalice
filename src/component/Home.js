import React, { Component } from "react";
import "../styles/navbar.css"
import Header from "./Header";
import About from "./About";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return(
            <div>
                <img src="../img/openeyes.jpg" style={{width:"100%", height:"400px"}}/>
                <div className="top">
                <Header/>
                </div>
                <About/>
            </div>
        )
    }
   
}

export default Home;