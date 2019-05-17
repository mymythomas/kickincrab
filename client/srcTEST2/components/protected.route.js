import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import auth from './auth';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            auth.isAuthenticated() ? (
                <Component {...props} />
            ) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        )} />
    );
};
        // <Route {...rest} render={props => {
        //         if (auth.isAuthenticated()) {
        //             return <Component {...props} />;
        //         }
        //         else {
        //             return (
        //                 <Redirect to={
        //                     {
        //                         pathname: '/login',
        //                         state: {
        //                             from: props.location
        //                         }
        //                     }}
        //                 />
        //             )
        //         }
        //     }}
        // />


export default ProtectedRoute;