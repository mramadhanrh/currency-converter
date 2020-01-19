import axios from 'axios';

const baseURL = {
  exchangeRates: 'https://api.exchangeratesapi.io/',
  openExchangeRates: 'https://openexchangerates.org/api/'
};

const axiosInstance = axios.create({
  baseURL: baseURL.exchangeRates,
  timeout: 10000
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
  exchangeRates: {
    latest: 'latest'
  },
  openExchangeRates: {
    currencies: 'currencies.json'
  }
};

export default axiosInstance;
export { routes, baseURL };
