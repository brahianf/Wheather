import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
      <Layout>
        <Switch>
        </Switch>
      </Layout>
  </BrowserRouter>
);

export default App;