import React, { useEffect, useState } from 'react';

import ErrorIndicator from '../Error-indicator';

import './Error-boundary.scss';

const ErrorBoundary = (props) => {
  const [hasError, setError] = useState(false);

  useEffect(() => {
    console.log(hasError);
    return setError(true);
  }, [hasError]);

  if (hasError) return <ErrorIndicator />;
  else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
};

export default ErrorBoundary;
