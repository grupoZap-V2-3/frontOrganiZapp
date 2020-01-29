import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import HostPage from '../pages/HostPage';
import AdminPage from '../pages/AdminPage';

const AppRouter = () => (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} /> 
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/host" component={HostPage} />
          <Route path="*/" component={NotFoundPage} />
        </Switch>
      </main>
    </Router>
);

export default AppRouter;