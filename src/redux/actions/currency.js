import types from '../types';

const { ADD_CURRENCY_ITEM, DELETE_CURRENCY_ITEM } = types.currency;

const addCurrencyItem = currencyItem => ({
  type: ADD_CURRENCY_ITEM,
  currencyItem
});

const deleteCurrencyItem = currencyItem => ({
  type: DELETE_CURRENCY_ITEM,
  currencyItem
});

export default {
  addCurrencyItem,
  deleteCurrencyItem
};
