import React from 'react';
import PropTypes from 'prop-types';

import CurrencyCard from '../../../molecules/Cards/CurrencyCard';

import styles from './index.module.css';

const CurrencyCardList = ({ data, baseCurrency, baseAmount, onDelete }) => {
  return (
    <div className={styles.list}>
      {data.map(({ currency, currencyName, currencyRate }) => {
        return (
          <CurrencyCard
            key={currency}
            currency={currency}
            currencyName={currencyName}
            currencyRate={currencyRate}
            baseCurrency={baseCurrency}
            baseAmount={baseAmount}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

CurrencyCardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string,
      currencyName: PropTypes.string,
      currencyRate: PropTypes.number
    })
  ),
  baseCurrency: PropTypes.string,
  baseAmount: PropTypes.number,
  onDelete: PropTypes.func
};

CurrencyCardList.defaultProps = {
  data: [],
  baseCurrency: '',
  baseAmount: '',
  onDelete: () => {}
};

export default CurrencyCardList;
