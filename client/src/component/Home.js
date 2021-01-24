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

    render() {
        return (
            <React.Fragment>
                <div className="top" style={{ width: "100%", height: "auto", backgroundImage: `url("https://media.istockphoto.com/photos/white-marble-texture-with-natural-pattern-for-background-picture-id1070353396?k=6&m=1070353396&s=612x612&w=0&h=TV4_31vkY6VXzkhcO1CQipzN2eOUzeTSkMMifU4wQbY=")` }}>
                    <Header />
                    <About />
                </div>
            </React.Fragment>
        )
    }

}

export default Home;