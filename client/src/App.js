import React,{Fragment} from "react";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'



const App = () => {
    return(
        <Router>
         <NavBar />

        <Switch>
        <Route exact path ="/" component={Home}/>
        <Switch>
        <Fragment>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        </Fragment>
        </Switch>
        
        </Switch>


        <Footer />
        </Router>
    )

}


export default App