import React from 'react';
import * as Router from 'react-router-dom';
import MainPage from '../pages';
import RepositoryPage from '../pages/RepositoryPage';

const { Route, Switch, Redirect } = Router;

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/1" />} />
      <Route exact path="/repos/:page/:number" component={RepositoryPage} />
      <Route exact path="/repos/:page/:number/:search" component={RepositoryPage} />
      <Route exact path="/:page" component={MainPage} />
      <Route path="/:page/:search" component={MainPage} />
    </Switch>
  );
}
