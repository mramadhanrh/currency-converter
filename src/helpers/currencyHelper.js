const convertToCurrency = value => {
  return value
    .replace(/(?!\.)\D/g, '') // deletes all non numeric characters except .
    .replace(/(?<=\..*)\./g, '') // removes all extra . except the first .
    .replace(/(?<=\.\d\d).*/g, '') // deletes everything after 2 decimal places
    .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // inserts commas at appropriate places
};

const convertCurrencyToNumber = value => {
  return value.replace(/,/g, ''); // Removes all comma in text
};

export default {
  convertToCurrency,
  convertCurrencyToNumber
};
