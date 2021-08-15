import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Gallary from './components/pages/Gallary';
import ContactMe from './components/pages/ContactMe';
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';




function App() {
  return (
       <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/gallary' component={Gallary} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={ContactMe} />
        </Switch>
      </Router>   
    </>
  );
}

export default App;
