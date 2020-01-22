import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyInfoHeader from '../src/components/organisms/Headers/CurrencyInfoHeader';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import AddCurrencyControl from '../src/components/molecules/InputGroup/AddCurrencyControl/AddCurrencyControl';
import CurrencyCardList from '../src/components/organisms/List/CurrencyCardList/CurrencyCardList';

import currencyApi from '../src/api/currencyApi';
import actions from '../src/redux/actions';
import currencyHelper from '../src/helpers/currencyHelper';

const Home = ({
  currencyReducer,
  currencyRates,
  currencyNames,
  onAddCurrencyItem,
  onDeleteCurrencyItem
}) => {
  const { rates = {}, base: baseCurrency = '' } = currencyRates;
  const [baseAmount, setBaseAmount] = useState('10.00');
  const { list: exchangeList } = currencyReducer;

  const getCurrencyList = () => {
    return Object.keys(rates).filter(val => !Object.values(exchangeList).includes(val));
  };

  const getListInFormat = () => {
    return Object.values(exchangeList).map(currency => ({
      currency,
      currencyName: currencyNames[currency],
      currencyRate: rates[currency]
    }));
  };

  const handleMoneyChange = value => {
    setBaseAmount(value);
  };

  const handleSubmit = currencyItem => {
    onAddCurrencyItem(currencyItem);
  };

  const handleDelete = currencyItem => {
    onDeleteCurrencyItem(currencyItem);
  };

  const header = () => (
    <CurrencyInfoHeader
      title={`${baseCurrency} - ${currencyNames[baseCurrency]}`}
      currency={baseCurrency}
      initialAmount={baseAmount}
      onChange={handleMoneyChange}
    />
  );

  return (
    <HomeTemplate header={header()}>
      <CurrencyCardList
        data={getListInFormat()}
        baseCurrency={baseCurrency}
        baseAmount={currencyHelper.convertCurrencyToNumber(baseAmount)}
        onDelete={handleDelete}
      />
      <AddCurrencyControl currencyList={getCurrencyList()} onSubmit={handleSubmit} />
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
  currencyReducer: PropTypes.shape({
    list: PropTypes.shape({})
  }),
  currencyRates: PropTypes.shape({
    rates: PropTypes.shape({}),
    base: PropTypes.string
  }),
  currencyNames: PropTypes.shape({}),
  onAddCurrencyItem: PropTypes.func,
  onDeleteCurrencyItem: PropTypes.func
};

Home.defaultProps = {
  currencyReducer: {
    list: {}
  },
  currencyRates: null,
  currencyNames: null,
  onAddCurrencyItem: () => {},
  onDeleteCurrencyItem: () => {}
};

const mapStateToProps = state => {
  const { currency } = state;

  return {
    currencyReducer: currency
  };
};

const mapDispatchToProps = dispatch => {
  const onAddCurrencyItem = currencyItem => {
    dispatch(actions.currency.addCurrencyItem(currencyItem));
  };

  const onDeleteCurrencyItem = currencyItem => {
    dispatch(actions.currency.deleteCurrencyItem(currencyItem));
  };

  return {
    onAddCurrencyItem,
    onDeleteCurrencyItem
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
