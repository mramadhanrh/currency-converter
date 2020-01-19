import axiosInstance, { routes, baseURL } from './axiosInstance';
import initialCurrency from '../constants/initialCurrency';

/**
 * Create request to receive latest exchange rates from server
 * @param {string} base Base currency for request parameter, this could be like USD, JPY, IDR and other that could be found in https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html
 */
const getExchangeRates = (baseCurrency = initialCurrency) => {
  const {
    exchangeRates: { latest: latestRatesRoutes }
  } = routes;

  return axiosInstance.get(latestRatesRoutes, {
    params: {
      base: baseCurrency
    }
  });
};

/**
 * Create request to receive currency name collection
 */
const getCurrencyNames = () => {
  const {
    openExchangeRates: { currencies: currenciesRoutes }
  } = routes;
  return axiosInstance.get(currenciesRoutes, {
    baseURL: baseURL.openExchangeRates
  });
};

export default {
  getExchangeRates,
  getCurrencyNames
};
