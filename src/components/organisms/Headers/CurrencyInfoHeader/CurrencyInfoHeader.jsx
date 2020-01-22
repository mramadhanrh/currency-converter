import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import InputCurrency from '../../../atoms/Inputs/InputCurrency';

import styles from './index.module.css';

const CurrencyInfoHeader = ({ title, currency, initialAmount, onChange }) => {
  return (
    <>
      <Row>
        <Col xs={24}>
          <h5 className={styles.header__title}>{title}</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={8} className={styles['header--col']}>
          <h2 className={styles.header__currency}>{currency}</h2>
        </Col>
        <Col xs={16} className={styles['header--col']}>
          <InputCurrency initialAmount={initialAmount} onChange={onChange} />
        </Col>
      </Row>
    </>
  );
};

CurrencyInfoHeader.propTypes = {
  title: PropTypes.string,
  currency: PropTypes.string,
  initialAmount: PropTypes.string,
  onChange: PropTypes.func
};

CurrencyInfoHeader.defaultProps = {
  title: '',
  currency: '',
  initialAmount: '10.00',
  onChange: () => {}
};

export default CurrencyInfoHeader;
