import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './core/header/header.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { checkUserSession } from './redux/user/user.actions';
import { SpinnerContainer, SpinnerOverlay } from './components/with-spinner/with-spinner.styles';

import { GlobalStyle } from './global.styles'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SingInOut = lazy(() => import('./pages/sing-in-out/sing-in-out.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const loading = (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );

  return (
    <div>
      <Header />
      <GlobalStyle />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={loading}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/singin" render={() => currentUser ? (<Redirect to='/' />) : (<SingInOut/>)} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );

}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
