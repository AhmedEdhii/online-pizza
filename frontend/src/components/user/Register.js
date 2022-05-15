import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'

const Register = ({ history }) => {

    // const [user, setUser] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // })

    // const { name, email, password } = user;
    const [name, setName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, phonenumber, email, password))
    }

    return (
        <Fragment>

            {/* <MetaData title={'Register User'} /> */}

            <div className="Signup">
            <img src="/images/logo-1.jpg" className="logo" alt="Business view - Reports" />
                <form className="form" onSubmit={submitHandler}>
                    {/* <h1 className="mb-3">Register</h1> */}
                    <div className="input-group">
                        <label htmlFor="name_field">Name</label>
                        <input
                            type="name"
                            id="name_field"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phonenumber_field">Phone Number</label>
                        <input
                            type="phonenumber"
                            id="phonenumber_field"
                            name='phonenumber'
                            value={phonenumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                        type="confirmPassword" 
                        name="confirmPassword" 
                        />
                    </div> */}

                    <button
                        id="register_button"
                        type="submit"
                        className="primary"
                        disabled={loading ? true : false}
                    >
                        REGISTER
                    </button>
                </form>
            </div>

        </Fragment>
    )
}

export default Register