import PropTypes, { InferProps } from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "services/store";

function TestWrapper({ children }: InferProps<typeof TestWrapper.propTypes>) {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestWrapper;
