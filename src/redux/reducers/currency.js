import types from '../types';

const initialState = {
  list: {}
};

const currency = (state = initialState, action) => {
  const { ADD_CURRENCY_ITEM, DELETE_CURRENCY_ITEM } = types.currency;
  const { type, currencyItem } = action;

  const addCurrencyItem = () => ({
    ...state,
    list: {
      ...state.list,
      [currencyItem]: currencyItem
    }
  });

  const deleteCurrencyItem = () => {
    const cloneState = { ...state };
    delete cloneState.list[currencyItem];

    return cloneState;
  };

  switch (type) {
    case ADD_CURRENCY_ITEM:
      return addCurrencyItem();
    case DELETE_CURRENCY_ITEM:
      return deleteCurrencyItem();
    default:
      return state;
  }
};

export default currency;
