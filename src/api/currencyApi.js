import axiosInstance, { routes } from './axiosInstance';

/**
 * Create request to receive latest exchange rates from server
 * @param {string} base Base currency for request parameter, this could be like USD, JPY, IDR and other that could be found in https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html
 */
const getExchangeRates = (baseCurrency = 'USD') => {
  axiosInstance.get(routes.latest, {
    params: {
      base: baseCurrency
    }
  });
};

export default {
  getExchangeRates
};
