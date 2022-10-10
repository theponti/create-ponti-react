import { Session } from "@supabase/supabase-js";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import AuthRoute from "components/AuthRoute";
import Header from "components/Header";
import Account from "scenes/Account";
import Auth from "scenes/Auth";
import Home from "scenes/Home";
import Loading from "scenes/Loading";
import NotFound from "scenes/NotFound";
import { setSession } from "services/auth";
import { ACCOUNT_PATH } from "services/constants/routes";
import { authSelectors, RootState, store } from "services/store";
import { supabase } from "services/supabase";

supabase.auth.getSession().then(({ data }) => {
  store.dispatch(setSession(data.session));
});

supabase.auth.onAuthStateChange((_event, currentValue) => {
  store.dispatch(setSession(currentValue));
});

type AppProps = {
  isLoadingAuth: boolean;
  session: Session | null;
  user: User | undefined;
};
function App({ isLoadingAuth, session, user }: AppProps) {
  const isAuthenticated = !!session;

  if (isLoadingAuth) {
    return <Loading />;
  }

  return (
    <div data-testid="app-container" className="text-primary h-full">
      <Header isAuthenticated={isAuthenticated} />
      <div className="mx-5">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<Auth user={user} />} />
          <Route
            path={ACCOUNT_PATH}
            element={
              <AuthRoute>
                <Account />
              </AuthRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoadingAuth: authSelectors.getIsLoadingAuth(state),
  session: authSelectors.getSession(state),
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(App);
