import React, { Fragment, useState, useEffect } from 'react'
import Login from './Login';
import Register from './Register';
import MetaData from '../layout/MetaData';
import { BrowserRouter as Router, Route } from 'react-router-dom'



const login_signup = () => {

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(e.target.email.value);
    
    //     if (!e.target.email.value) {
    //       alert("Email is required");
    //     } else if (!e.target.email.value) {
    //       alert("Valid email is required");
    //     } else if (!e.target.password.value) {
    //       alert("Password is required");
    //     } else if (
    //       e.target.email.value === "me@example.com" &&
    //       e.target.password.value === "123456"
    //     ) {
    //       alert("Successfully logged in");
    //       e.target.email.value = "";
    //       e.target.password.value = "";
    //     } else {
    //       alert("Wrong email or password combination");
    //     }
    //   };
    
    return (
        
        <div className="row1">
            <MetaData title={'Login/Signup'} />
            <Route render={({ history }) => <Login history={history} />} />
            <Route render={({ history }) => <Register history={history} />} />
        </div>
    )
}

export default login_signup