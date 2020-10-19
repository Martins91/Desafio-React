import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Padrao from '../Components/Padrão/Index';
import Login from '../Components/Login/Index';
import Home from '../Components/Home/Index';
import CreateAccount from '../Components/CreateAccount/Index';
import ProductList from '../Components/ProductList/Index';
import ProductDelete from '../Components/ProductDelete/Index';
import ProductUpdate from '../Components/ProductUpdate/Index';

function Routes() {
  return (
    <Switch>
      <Route path={'/'} exact component={Padrao} />
      <Route path={'/Login'} component={Login} />
      <Route path={'/Home'} component={Home} />
      <Route path={'/CreateAccount'} component={CreateAccount} />
      <Route path={'/ProductList'} component={ProductList} />
      <Route path={'/ProductDelete'} component={ProductDelete} />
      <Route path={'/ProductUpdate'} component={ProductUpdate} />
    </Switch>
  );
}

export default Routes;
