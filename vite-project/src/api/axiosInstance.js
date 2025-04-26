import axios from "axios";

// Create instance
const axiosInstance = axios.create({
  baseURL: "https://nadeens-api.netlify.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Before sending any request, automatically attach the token if it exists
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
