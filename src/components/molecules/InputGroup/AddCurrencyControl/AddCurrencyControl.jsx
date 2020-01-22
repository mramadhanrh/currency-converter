import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { FiPlusCircle as PlusIcon } from 'react-icons/fi';

import DropdownButton from '../DropdownButton';

import styles from './index.module.css';

const AddCurrencyControl = ({ text, currencyList, onSubmit }) => {
  const [isSelecting, setSelecting] = useState(false);

  const handleClick = () => {
    setSelecting(true);
  };

  const handleSubmit = value => {
    onSubmit(value);
    setSelecting(false);
  };

  return (
    <div className={styles.container}>
      {isSelecting ? (
        <DropdownButton data={currencyList} onSubmit={handleSubmit} />
      ) : (
        <Button className={styles['container__add-button']} type="primary" onClick={handleClick}>
          <span className={styles['add-button__icon']}>
            <PlusIcon />
          </span>
          {text}
        </Button>
      )}
    </div>
  );
};

AddCurrencyControl.propTypes = {
  text: PropTypes.string,
  currencyList: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func
};

AddCurrencyControl.defaultProps = {
  text: 'Add More Currency',
  currencyList: [],
  onSubmit: () => {}
};

export default AddCurrencyControl;
