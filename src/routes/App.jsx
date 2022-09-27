// imr
import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;

import Layout from '../containers/layout';
import Home from '../pages/Home';
import Login from '../pages/login';
import NewPassword from '../pages/new_password';
import SendEmail from '../pages/password_recovery2';
import MyAccount from '../pages/my_account';
import CreateAccount from '../pages/create_account';
import Checkout from '../pages/my_order';
import Orders from '../pages/my_orders';
import NotFound from '../pages/NotFound';
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