// import React,{ useState,useEffect} from 'react'
// import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Crousel from './Crousel.js'
import Navbar from './Navbar.js'

import Latest from './Latest.js'
import About from './About.js';
import Signup from './Signup.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
 
} from "react-router-dom";
import Login from './Login.js';
import BB from './BB.js';
import Service from './Service.js';

import Final from './Final.js';
import FooterPage from './Footer.js';
import MyCarousel from './MyCarousel.js';
import Forget from './Forget.js';
import Registration from './Registration.js';
import Login1 from './Login1.js';
export default function App() {
 
  const d={
    backgroundImage:"linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('http://www.indiantrekking.com/themes/images/slider2.jpg')",
    height:"75vh",
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
   backgroundBlendMode:'darken'
  }
 
  return (
    <div style={d} id="ds">
    <Router>

     <Navbar/>
      
    <Switch>
    <Route exact path="/">
      <Crousel />
      <About/>
<Latest/>

      

      </Route>
      <Route  path="/login">
       <Login/>
      </Route>
      <Route  path="/login1">
       <Login1/>
      </Route>
      <Route path="/Service">
       <Service/>
      </Route>
      <Route path="/Final">
       <Final/>
      </Route>
      <Route path="/Signup">
       <Signup/>
      </Route>
      <Route path="/Features">
        <MyCarousel/>
      </Route>
      <Route path="/Forget">
        <Forget/>
      </Route>
      <Route path="/Registration">
        <Registration/>
      </Route>
      <Route path="/BB">
        <BB/>
      </Route>
    
    </Switch>
    </Router>
    <FooterPage/>
    </div>
  )
}
  
