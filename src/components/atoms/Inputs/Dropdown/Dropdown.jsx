import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Dropdown = ({ data, value, onChange }) => {
  return (
    <select className={styles.dropdown} value={value} onChange={onChange}>
      {data.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func
};

Dropdown.defaultProps = {
  data: [],
  value: '',
  onChange: () => {}
};

export default Dropdown;
