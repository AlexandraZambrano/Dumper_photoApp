import axios from 'axios';

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

export default axiosInstance;
