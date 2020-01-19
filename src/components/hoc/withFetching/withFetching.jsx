import React from 'react';

const withFetching = WrappedComponent => {
  return props => {
    return <WrappedComponent {...props} />;
  };
};

export default withFetching;
