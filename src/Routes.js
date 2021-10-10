import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';

const Routes = () => {
  const user = localStorage.getItem('token');
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (user ? <Component {...props} /> : <Redirect to="/login" />)} />
  );

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
