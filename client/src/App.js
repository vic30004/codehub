import React from "react";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'



const App = () => {
    return(
        <Router>
         <NavBar />

        <Switch>
        <Route exact path ="/" component={Home}/>
      
        </Switch>


        <Footer />
        </Router>
    )

}


export default App