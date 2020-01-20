import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CurrencyInfoHeader from '../src/components/organisms/Headers/CurrencyInfoHeader';
import HomeTemplate from '../src/components/templates/HomeTemplate';

import currencyApi from '../src/api/currencyApi';
import initialCurrency from '../src/constants/initialCurrency';
import currencyHelper from '../src/helpers/currencyHelper';
import CurrencyCard from '../src/components/molecules/Cards/CurrencyCard';

const Home = ({ currencyRates, currencyNames }) => {
  const [moneyAmount, setMoneyAmount] = useState('10.00');

  const handleMoneyChange = value => {
    setMoneyAmount(value);
  };

  const header = () => (
    <CurrencyInfoHeader
      title={`${initialCurrency} - ${currencyNames[initialCurrency]}`}
      currency={initialCurrency}
      initialAmount={moneyAmount}
      onChange={handleMoneyChange}
    />
  );

  return (
    <HomeTemplate header={header()}>
      <CurrencyCard />
      <p>{currencyHelper.convertCurrencyToNumber(moneyAmount) * currencyRates.rates.IDR}</p>
      <p>Hello world!</p>
      <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(currencyRates)}</p>
      <p>{JSON.stringify(currencyNames)}</p>
    </HomeTemplate>
  );
};

Home.getInitialProps = async () => {
  const [currencyRates, currencyNames] = await Promise.all([
    currencyApi.getExchangeRates(),
    currencyApi.getCurrencyNames()
  ]).then(resCollection =>
    resCollection.map(({ data }) => {
      return data;
    })
  );

  return { currencyRates, currencyNames };
};

Home.propTypes = {
  currencyRates: PropTypes.shape({
    rates: PropTypes.shape({})
  }),
  currencyNames: PropTypes.shape({})
};

Home.defaultProps = {
  currencyRates: null,
  currencyNames: null
};

export default Home;
