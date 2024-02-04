//import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginform from './Loginform.jsx';
import Dashboard from './Dashboard.jsx';

const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path = "/login" component = {Loginform}/>
            <Route path = "/dashboard" component = {Dashboard}/>
        </Switch>
    </Router>
  );
};

export default AppRouter;