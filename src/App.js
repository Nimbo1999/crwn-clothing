import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import SingInOut from './pages/sing-in-out/sing-in-out.component';
import Header from './core/header/header.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles'

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/singin" render={() => currentUser ? (<Redirect to='/' />) : (<SingInOut/>)} />
        <Route exact path="/checkout" component={CheckoutPage} />
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
