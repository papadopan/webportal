import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout/Layout';


import Home from './containers/Home/Home';
import Overview from './containers/Overview/Overview';
import Sop from './containers/SOP/Sop';
import Notification from './containers/Notification/Notification';
import Upcoming from './containers/Upcoming/Upcoming';
import History from './containers/History/History';
import Team from './containers/Team/Team';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Overview" component={Overview} />
      <Route exact path="/SOP" component={Sop} />
      <Route exact path="/Notification" component={Notification} />
      <Route exact path="/Upcoming" component={Upcoming} />
      <Route exact path="/History" component={History} />
      <Route exact path="/Team" component={Team} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);
export default App;
