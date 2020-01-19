import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import styles from './index.module.css';

const { Header, Content } = Layout;

const HomeTemplate = ({ header, children }) => {
  return (
    <Layout>
      <Header className={styles.header}>{header}</Header>
      <Content>{children}</Content>
    </Layout>
  );
};

HomeTemplate.propTypes = {
  header: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

HomeTemplate.defaultProps = {
  header: null,
  children: null
};

export default HomeTemplate;
