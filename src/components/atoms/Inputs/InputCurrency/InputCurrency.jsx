import React, { useState } from 'react';
import PropTypes from 'prop-types';

import currencyHelper from '../../../../helpers/currencyHelper';

import styles from './index.module.css';

const InputCurrency = ({ className, step, initialAmount, onChange }) => {
  const [inputValue, setInputValue] = useState(initialAmount);

  const handleChange = e => {
    const {
      target: { value }
    } = e;
    const currencyValue = currencyHelper.convertToCurrency(value);

    setInputValue(currencyValue);
    onChange(currencyValue);
  };

  return (
    <input
      type="text"
      className={`ant-input ${styles.input} ${className}`}
      step={step}
      onChange={handleChange}
      value={inputValue}
    />
  );
};

InputCurrency.propTypes = {
  className: PropTypes.string,
  step: PropTypes.string,
  initialAmount: PropTypes.string,
  onChange: PropTypes.func
};

InputCurrency.defaultProps = {
  className: '',
  step: '0.01',
  initialAmount: '10.00',
  onChange: () => {}
};

export default InputCurrency;
