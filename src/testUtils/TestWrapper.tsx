import { ThemeProvider } from '@emotion/react';
import PropTypes, { InferProps } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import theme from 'styles/theme';

function TestWrapper({ children }: InferProps<typeof TestWrapper.propTypes>) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
}

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestWrapper as React.FC;
