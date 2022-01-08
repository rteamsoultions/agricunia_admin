import React from 'react';
import  Pages  from "../pages";
import { Switch } from 'react-router';
// import { Route, Switch } from 'react-router';
// import Layout from '../layout/Layout';
// import LogRegLayout from '../layout/LogRegLayout';

const Routes = () => {
    return (
        <Switch>
        {/* <Route path="/error" component={Error} /> */}

        {/* <Layout> */}
          <Pages />
        {/* </Layout> */}
      </Switch>
    )
}

export default Routes

