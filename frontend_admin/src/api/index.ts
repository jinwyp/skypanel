import axios from 'axios';


const http1 = axios.create({
    baseURL: 'http://localhost:4000/api/admin',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});


http1.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default http1;
