import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HeaderTest from './components/layout/HeaderTest';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Login from './components/user/Login';
import Register from './components/user/Register';
import login_signup from './components/user/login_signup';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';


import ProtectedRoute from './components/route/protectedRoute';

import { loadUser } from './actions/userActions'
import store from './store'


import Homepage from './Pages/Homepage';
import LoginandSignup from './Pages/LoginandSignup';
import TestPage from './Pages/TestPage';

import AdminDashboard from './components/admin/AdminDashboard';
import AdminDashboardMenu from './components/admin/AdminDashboardMenu';


import UserDashboard from './userDashboard/UserDashboard';
import UserProfile from './userDashboard/UserProfile';
import UserOrders from './userDashboard/UserOrders';

import Checkout from './Pages/Checkout';

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <Redirect to="/homepage" component={Homepage} />
          )
        }}
      />
      <Route path="/" component={HeaderTest} />
      {/* <HeaderTest/> */}
      {/* <Route path="/login" component={login_signup} /> */}
      <Route path="/homepage" component={Homepage} />
      <Route path="/login" component={LoginandSignup} />

      <ProtectedRoute path="/AdminDashboard" component={AdminDashboard} isAdmin={true} />
      <ProtectedRoute path="/AdminDashboardMenu" component={AdminDashboardMenu} isAdmin={true} />

      {/* <Route path="/Admin_ManageUsers" component={Admin_ManageUsers} />*/}

      <Route path="/UserDashboard" component={UserDashboard} />
      {/* <Route path="/UserProfile" component={UserProfile} />
      <Route path="/userOrders" component={UserOrders} /> */}


      {/* Test Page */}
      <Route path="/testPage" component={TestPage} />
      <Route path="/checkout" component={Checkout} />

      {/* <Header/> */}
      {/* <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} /> */}

      <ProtectedRoute path="/profile" component={Profile} exact />
      <ProtectedRoute path="/profile/update" component={UpdateProfile} exact />
      <ProtectedRoute path="/profile/update/password" component={UpdatePassword} exact />
      {/* <ProtectedRoute path="/admin/dashboard" component={Dashboard} isAdmin={true} exact /> 

          <Route path="/" component={Homepage} /> */}
      {/* <Footer /> */}

    </Router>
  );
}

export default App;