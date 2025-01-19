import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://frontend-take-home-service.fetch.com", 
  withCredentials: true, 
});

export default axiosClient;
