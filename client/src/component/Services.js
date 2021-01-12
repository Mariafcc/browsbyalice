import React, { Component } from "react";
// import "../styles/variables.scss"
import Header from "./Header"
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
            <div>
                <Header/>
                <div>
                    <h1>Services</h1>
                </div>
                <div class="row">
                    <div
                        className="col-sm-12 col-md-6 col-lg-4">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <p>Name</p>
                                    <p>Price</p>
                                    <image>picture</image>
                                    <p>Description</p>
                                </div>

                            </div>
                            <div className="row">
                                <div class="col">
                                    <p>Name</p>
                                    <p>Price</p>
                                    <image>picture</image>
                                    <p>Description</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Services;