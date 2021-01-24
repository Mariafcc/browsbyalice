
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Brows from "./Brows";
import Lashes from "./Lashes";
import Makeup from "./Makeup";
import "../styles/services.css";


const ServiceList = () => {


    return (
        <div>
            <Header />
            {/* <div>
                    <img src="./img/bg.jpeg" style={{width:"100%", opacity:".5", backgroundRepeat:"repeat-y"}}></img>
                </div> */}
            <div className="container-fluid" id="bg">
                <div className="container" style={{border:"solid"}}>
                   <Brows/>
                   <Lashes id="lashes"/>
                    <Makeup id="makeup"/>
                </div>
            </div>
        </div>
    )

}

export default ServiceList;