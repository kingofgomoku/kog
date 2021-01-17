import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

const axiosDefault = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

Vue.use(VueAxios, axiosDefault);

export default axiosDefault;
