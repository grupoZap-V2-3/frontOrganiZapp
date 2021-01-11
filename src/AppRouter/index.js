import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import HostPage from '../pages/HostPage';
import AdminPage from '../pages/AdminPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import ForgotPassword from '../pages/ForgotPassword';

const AppRouter = () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/host" component={HostPage} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/change-pass" component={ChangePasswordPage} />
        <Route path="*/" component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;