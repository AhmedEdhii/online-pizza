import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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

import AdminDashboard from './components/admin/AdminDashboard';

import ProtectedRoute from './components/route/protectedRoute';

import { loadUser } from './actions/userActions'
import store from './store'


import Homepage from './Pages/Homepage';
import LoginandSignup from './Pages/LoginandSignup';
import TestPage from './Pages/TestPage';

import AdminMainDashboard from './components/admin/AdminMainDashboard';
import AdminDashboardMenu from './components/admin/AdminDashboardMenu';
import Admin_ManageUsers from './components/admin/Admin_ManageUsers';

import UserDashboard from './userDashboard/UserDashboard';
import UserProfile from './userDashboard/UserProfile';
import UserOrders from './userDashboard/UserOrders';


function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Router>
          <Route path="/" component={HeaderTest} />
          {/* <HeaderTest/> */}
          <Route path="/login" component={login_signup} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/mylogin" component={LoginandSignup} />

          <Route path="/AdminDashboard" component={AdminMainDashboard} />
          <Route path="/AdminDashboardMenu" component={AdminDashboardMenu} />
          <Route path="/Admin_ManageUsers" component={Admin_ManageUsers} />
          <Route path="/AdminDashboardMenu" component={AdminDashboardMenu} />
          <Route path="/AdminDashboardMenu" component={AdminDashboardMenu} />

          <Route path="/UserDashboard" component={UserDashboard} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/userorders" component={UserOrders} />


          {/* Test Page */}
          <Route path="/testPage" component={TestPage} />

          
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
