import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import SingInOut from './pages/sing-in-out/sing-in-out.component'
import Header from './core/header/header.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/singin" component={SingInOut} />
      </Switch>
    </div>
  );
}

export default App;
