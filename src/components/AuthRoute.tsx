import { ReactNode } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "scenes/Loading";
import { AppState, authSelectors } from "services/store";

type AuthRouteProps = {
  children: ReactNode;
  isLoadingAuth: boolean;
  user?: User;
};
function AuthRoute({ children, isLoadingAuth, user }: AuthRouteProps) {
  if (isLoadingAuth) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}

AuthRoute.defaultProps = {
  user: undefined,
};

const mapStateToProps = (state: AppState) => ({
  isLoadingAuth: authSelectors.getIsLoadingAuth(state),
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(AuthRoute);
