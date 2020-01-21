import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import { FiMinus as MinusIcon } from 'react-icons/fi';

import styles from './index.module.css';
import currencyHelper from '../../../../helpers/currencyHelper';

const CurrencyCard = ({
  currency,
  currencyName,
  currencyRate,
  baseCurrency,
  baseAmount,
  onDelete
}) => {
  const formattedAmount = currencyHelper.convertToCurrency(baseAmount * currencyRate);
  const formattedRates = currencyHelper.convertToCurrency(currencyRate);

  const handleClick = () => {
    onDelete(currency);
  };
  return (
    <Row className={styles.card}>
      <Col xs={20} sm={22} className={styles.card__row}>
        <div className={styles.card__body}>
          <Row>
            <Col xs={4}>
              <h1 className={styles.body__currency}>{currency}</h1>
            </Col>
            <Col xs={20} className={styles['body__amount-wrapper']}>
              <h1 className={styles.body__amount}>{formattedAmount}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className={styles['body__currency-name']}>{`${currency} - ${currencyName}`}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className={styles.body__rates}>
                {`1 ${baseCurrency} = ${currency} ${formattedRates}`}
              </h3>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs={4} sm={2} className={styles.card__row}>
        <Button type="primary" className={styles.card__button} onClick={handleClick}>
          <MinusIcon />
        </Button>
      </Col>
    </Row>
  );
};

CurrencyCard.propTypes = {
  currency: PropTypes.string,
  currencyName: PropTypes.string,
  currencyRate: PropTypes.number,
  baseCurrency: PropTypes.string,
  baseAmount: PropTypes.number,
  onDelete: PropTypes.func
};

CurrencyCard.defaultProps = {
  currency: '',
  currencyName: '',
  currencyRate: 0,
  baseCurrency: '',
  baseAmount: 0,
  onDelete: PropTypes.func
};

export default CurrencyCard;
