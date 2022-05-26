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

import Dashboard from './components/admin/Dashboard';

import ProtectedRoute from './components/route/protectedRoute';

import { loadUser } from './actions/userActions'
import store from './store'





function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Router>

          {/* <Header/> */}
          {/* <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />

          <Route path="/login" component={login_signup} />
          
          <ProtectedRoute path="/profile" component={Profile} exact />
          <ProtectedRoute path="/profile/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/profile/update/password" component={UpdatePassword} exact />
          <ProtectedRoute path="/admin/dashboard" component={Dashboard} isAdmin={true} exact /> */}

          <Route path="/" component={HeaderTest} />
        {/* <Footer /> */}
        
    </Router>
  );
}

export default App;
