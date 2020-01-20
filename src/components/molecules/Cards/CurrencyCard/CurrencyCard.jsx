import React from 'react';

import { Row, Col } from 'antd';
import styles from './index.module.css';

const CurrencyCard = () => {
  return (
    <Row className={styles.card}>
      <Col xs={20} sm={22} className={styles.card__row}>
        <div className={styles.card__wrapper}>
          <p>Card</p>
        </div>
      </Col>
      <Col xs={4} sm={2} className={styles.card__row}>
        <button type="button" className={styles.card__button}>
          button
        </button>
      </Col>
    </Row>
  );
};

export default CurrencyCard;
