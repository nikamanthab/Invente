import React from 'react';
import logo from './logo.svg';
import {Router} from '@reach/router';
import Home from './js/container/home';
import './css/sidebar.css';
import Contact from './js/container/contact.js';
import AboutUs from './js/container/aboutus.js';
import Test from './js/components/picbubble';
import EventDetails from './js/container/EventDetails';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
     <Router>
       <Home path='/'/>
       <Contact path='/contact'/> 
       <AboutUs path='/about'/>
       <Test path='/test'/>
       <EventDetails path='/eventdetails/:id'/> 
     </Router>
    </div>
  );
}

export default App;
