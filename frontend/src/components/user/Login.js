import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'

const Login = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/homepage')
        }

        if (error) {
            //alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <Fragment>
            {/* {loading ? <Loader /> : ( */}
                <Fragment>
                    {/* <MetaData title={'Login'} /> */}
                    <div className="Login">
                        <img src="/images/logo-1.jpg" className="logo" alt="Business view - Reports" />
                        <form className="form" onSubmit={submitHandler}>
                                {/* <h1 className="mb-3">Login</h1> */}
                                <div className="group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="password_field">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    id="button"
                                    type="submit"
                                    className="primary"
                                >
                                    LOGIN
                                 </button>
                            </form>
                    </div>
                </Fragment>
            {/* )} */}
        </Fragment>
    )
}

export default Login