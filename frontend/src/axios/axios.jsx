import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/post',
});

// Add a request interceptor to attach the token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const navigate = useNavigate()

    if (error.response && error.response.status === 403) {
     console.log('got through') // Handle the forbidden response by navigating to the forbidden page
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
