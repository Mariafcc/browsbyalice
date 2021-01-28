import React, { Component } from "react";
import AboutHeader from "./AboutHeader"
import { Container } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <Container style={{fontFamily: "Dosis"}}>
                    <br></br>
                    <p>Welcome to Brows by Alice! I’m Alice, and this website is your source for all information about permanent makeup (PMU) and the various services that I provide to my fabulous clientele, which I hope will include you as well!</p>
                    <br></br>
                    <p>A little about me --- I have been a licensed esthetician with a certificate in Permanent Makeup, which includes microblading and brow shading, for several years now. However, I can appreciate my humble beginnings. After many years of making over others and having a passion for makeup applications and the beauty industry, I wanted to expand my skill set to include permanent makeup. With a desire to become an expert in my industry, I attended the Estelle Skincare and Spa Institute to become an esthetician in 2016 and couldn’t be more proud of how my career has expanded!  I humbly acknowledge the successes I’ve found during my nearly ten year career in the beauty industry particularly in my specialization in flawless and customized makeup applications.</p>
                    <br></br>
                    <p>
                        I would love to offer you any of the services I exceptionally provide which includes:  </p>
                    <ul>
                        <li>
                            Microblading
                    </li>
                        <li>
                            Brow shading
                    </li>
                        <li>
                            Facial treatments
                    </li>
                        <li>
                            Lymphatic massages
                    </li>
                        <li>
                            Chemical peels
                    </li>
                        <li>
                            Microdermabrasion
                    </li>
                        <li>
                            Waxing
                    </li>
                        <li>
                            Laser hair removal
                    </li>
                        <li>
                            & MORE
                    </li>
                    </ul>
                    <br></br>
                    <br></br>
                </Container>
            </div>
        )
    }
}

export default About;