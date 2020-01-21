import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';

import Dropdown from '../../../atoms/Inputs/Dropdown';

import styles from './index.module.css';

const DropdownButton = ({ data, onSubmit }) => {
  const [selectedValue, setValue] = useState(data[0] || '');

  const handleSubmit = () => {
    onSubmit(selectedValue);
  };

  const handleDropdownChange = e => {
    const {
      target: { value }
    } = e;

    setValue(value);
  };

  return (
    <Row className={styles.container} gutter={8}>
      <Col xs={16} sm={20} className={styles.container__col}>
        <Dropdown data={data} value={selectedValue} onChange={handleDropdownChange} />
      </Col>
      <Col xs={8} sm={4} className={styles.container__col}>
        <Button type="primary" className={styles.container__button} onClick={handleSubmit}>
          Submit
        </Button>
      </Col>
    </Row>
  );
};

DropdownButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func
};

DropdownButton.defaultProps = {
  data: [],
  onSubmit: () => {}
};

export default DropdownButton;
