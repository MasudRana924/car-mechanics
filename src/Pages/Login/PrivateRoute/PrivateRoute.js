import React from 'react';
import { Spinner } from 'react-bootstrap';
import {Route,Redirect} from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';

const Privateroute = ({children , ...rest}) => {
    const {user,isLoading}=useAuth()
    if(isLoading){
   return ( 
     <>
    <Spinner animation="border" variant="secondary" />
    <Spinner animation="border" variant="success" />
    <Spinner animation="border" variant="danger" />
    <Spinner animation="border" variant="dark" />
    <Spinner animation="border" variant="warning" />
    <Spinner animation="border" variant="info" />
    
    </>
   )  
 
    }
    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default Privateroute;