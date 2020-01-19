import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const HomeTemplate = ({ header, children }) => {
  return (
    <Layout>
      <Header>{header}</Header>
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
