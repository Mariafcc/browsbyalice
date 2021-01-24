import React, { Component, useState, useEffect } from "react";
import  ServiceDisplay from "../services/service.services"
import Header from "./Header"

const ServiceSelector = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        getServices();
    }, [])


    const getServices = () => {
        ServiceDisplay.serviceDisplay().then((res) => {
            const reccs = Object.values(res.data.services)
            reccs.sort((a, b) => { return a.order - b.order })
            setServices([...reccs]);
        
        })
            .catch((error) => {
                console.log(error);
            });
    };

}

export default ServiceSelector;