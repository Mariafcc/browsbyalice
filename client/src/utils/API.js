import axios from "axios";

export default {
  getServices: function() {
    return axios.get("/api/services");
  }
};
