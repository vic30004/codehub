import React, { Fragment,useEffect,useContext } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './components/context/auth/AuthState';
import './App.css';
import CreateProfile from './components/auth/CreateProfile';
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import PrivateRoute from './components/Routing/PrivateRoute'
import ProfileState from './components/context/profile/ProfileState'




const App = () => {
 
  return (
      <Router>
      <AuthState>
      <ProfileState>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Switch>
            <Fragment>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/create-profile' component={CreateProfile} />
              <Route exact path='/profile' component={Profile}/>
              <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            </Fragment>
          </Switch>
        </Switch>
        <Footer />
        </ProfileState>
        </AuthState>
      </Router>
  );
};

export default App;
