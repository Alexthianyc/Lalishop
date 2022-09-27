// imr
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './src/containers/layout';
import Home from './src/pages/home';
import Login from './src/pages/login';
import NewPassword from './src/pages/new_password';
import SendEmail from './src/pages/password_recovery2';
import MyAccount from './src/pages/my_Account';
import CreateAccount from './src/pages/create_account';
import Checkout from './src/pages/my_order';
import Orders from './src/pages/my_orders';
import NotFound from './src/pages/NotFound';
import "../styles/global.css";

// sfc
const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App;