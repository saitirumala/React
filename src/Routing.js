import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Reactstrap from './components/reactstrap';
import Map from './components/googlemaps';
import Calculator from './components/calculator';
import Form from './components/form';

const RoutingPage = () => {
    // let authCheck = localStorage.getItem("auth");
    return (
      <div>
        <Switch>
          <PrivateRoute
            exact
            path="/reactstrap"
            component={Reactstrap}
            authCheck={true}
          />
          <PrivateRoute
            exact
            path="/map"
            component={Map}
            authCheck={true}
          />
          <PrivateRoute
            exact
            path="/calculator"
            component={Calculator}
            authCheck={true}
          />
            <PrivateRoute
            exact
            path="/form"
            component={Form}
            authCheck={true}
          />
         
        </Switch>
      </div>
    );
  };
  export default RoutingPage;

  var PrivateRoute = ({ component: Components, authCheck, ...props }) => {
    console.log(props);
    return (
      <Route
        {...props}
        render={ props =>
            authCheck ? (
            <Components {...props} />
          ) :(
            <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
          )
        }
      />
    );
  };