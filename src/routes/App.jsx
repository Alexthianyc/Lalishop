// imr
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from '../containers/layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewPassword from '../pages/NewPassword';
import SendEmail from '../pages/SendEmail';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../containers/myOrder';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import "../styles/global.css";

// sfc
const App = () => {
  const initialState = useInitialState();
    return (
      <AppContext.Provider value={initialState}>
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
      </AppContext.Provider>
    );
}

export default App;