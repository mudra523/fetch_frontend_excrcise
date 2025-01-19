import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://frontend-take-home-service.fetch.com", // The base URL
  withCredentials: true, // Important! So that the cookie is included
});

export default axiosClient;
