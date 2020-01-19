import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.exchangeratesapi.io/',
  timeout: 3000
});

const handleRequestError = error => {
  // We could add response error handler here
  // like sending error detail to error reporting services such as sentry
  Promise.reject(error);
};

const handleResponseError = error => {
  // We could add response error handler here
  // like sending error detail to error reporting services such as sentry
  Promise.reject(error);
};

axiosInstance.interceptors.response.use(response => response, handleResponseError);
axiosInstance.interceptors.request.use(response => response, handleRequestError);

const routes = {
  latest: 'latest'
};

export default axiosInstance;
export { routes };
