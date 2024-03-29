import React from 'react';
import { Router, Route, Switch, Link, NavLink ,withRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Cart from '../components/Cart';
import Description from '../components/ItemDescription';
import SearchResult from '../components/SearchResult';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>

        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/cart" component={Cart} />
        <PrivateRoute  path='/description' component={Description}/>
        <PrivateRoute path='/search' component={SearchResult}/>
        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
