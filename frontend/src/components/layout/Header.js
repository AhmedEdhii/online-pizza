import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import Search from './Search';

import '../../App.css';
// check this
const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/logo.jpg" />
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count">0</span>
                    </Link>
                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-black mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span id="text"> {user && user.name}</span>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
                                {user && user.role !== 'admin' ? (
                                    <Link className="dropdown-item" to="/myorders">Orders</Link>
                                ) : (
                                    <Link className="dropdown-item" to="/admin/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>
                            </div>

                        </div>
                    ) : <Link to="/login" style={{color: "white"}} className="btn ml-4" id="login_btn">Login</Link>}
                    {/* ) : !loading && <Link to="/login" style={{color: "white"}} className="btn ml-4" id="login_btn">Login</Link>} */}
                </div>
            </nav>
        </Fragment>
    )
}

export default Header