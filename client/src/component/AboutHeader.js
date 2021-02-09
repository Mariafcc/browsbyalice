import React, { Component } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";



class AboutHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ backgroundColor: "#666699", position: "fixed", left: "0", bottom: "0", right: "0" }}>
                    {/* <a href="https://www.instagram.com/brows.by.alice/?igshid=gz8d6g70lsza" target="_blank"><FaInstagram style={{ height: "40px", width: "40px", color: "white" }} /> </a>
                    <a href="https://www.google.com/maps/place/Brows+by+Alice/@42.125594,-87.8361676,13z/data=!4m5!3m4!1s0x0:0xdf5e400ffa6f6705!8m2!3d42.125594!4d-87.8361676" target="_blank"><FaMapMarkerAlt style={{ height: "40px", width: "40px", color: "white" }} /> </a> */}
                    <p style={{color: "#c2c2e6" , fontSize: "15px", fontFamily: 'Playfair Display', textAlign:"center", padding: "15px 0" }}>
                        Copyright BrowsByAlice®
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutHeader;