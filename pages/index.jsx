import React from 'react';
import PropTypes from 'prop-types';

import HomeTemplate from '../src/components/templates/HomeTemplate';
import CurrencyInfoHeader from '../src/components/organisms/Headers/CurrencyInfoHeader';
import initialCurrency from '../src/constants/initialCurrency';
import currencyApi from '../src/api/currencyApi';

const Home = ({ currencyRates, currencyNames }) => {
  const header = () => <CurrencyInfoHeader title={`${initialCurrency} - `} />;

  return (
    <HomeTemplate header={header()}>
      <p>Hello world!</p>
      <p>{JSON.stringify(currencyRates)}</p>
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
  currencyRates: PropTypes.shape({}),
  currencyNames: PropTypes.shape({})
};

Home.defaultProps = {
  currencyRates: null,
  currencyNames: null
};

export default Home;
