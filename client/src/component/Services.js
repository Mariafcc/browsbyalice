import React, { useEffect, useState } from "react";
import Header from "./Header";
import Brows from "./Brows";
import Lashes from "./Lashes";
import Makeup from "./Makeup";



const ServiceList = () => {

    return (
        <div>
            <Header />
            <div className="container-fluid">
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