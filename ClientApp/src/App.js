import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import LoginPage from './components/auth/login/LoginPage';
import FetchData from './components/FetchData';
import TablesApp from './components/Tables/Tables-app';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route path='/login' component={LoginPage} />
        <Route path='/tables' component={TablesApp} />
</Layout>
);
