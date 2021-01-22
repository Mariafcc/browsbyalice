import axios from "axios";

const API_URL = "/api/services"

const serviceDisplay = () => {
    return axios.get(API_URL);
}

export default {
    serviceDisplay
}