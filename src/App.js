import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout/Layout';


import Home from './containers/Home/Home';
import Overview from './containers/Overview/Overview';
import Sop from './containers/SOP/Sop';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Overview" component={Overview} />
      <Route exact path="/SOP" component={Sop} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);
export default App;
