import { ThemeProvider } from '@emotion/react';
import PropTypes, { InferProps } from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'services/store';

import theme from 'styles/theme';

function TestWrapper({ children }: InferProps<typeof TestWrapper.propTypes>) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestWrapper as React.FC;
