import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const DropdownList = ({ data }) => {
  return (
    <select className={styles.dropdown}>
      {data.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

DropdownList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

DropdownList.defaultProps = {
  data: []
};

export default DropdownList;
