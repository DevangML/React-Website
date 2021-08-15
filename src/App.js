import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Gallary from './components/pages/Gallary';
import ContactMe from './components/pages/ContactMe';
import Timedline from './components/pages/Timeline';
import Icofont from 'react-icofont';

function App() {
  return (
       <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/gallary' component={Gallary} />
          <Route path='/projects' component={Projects} />
          <Route path='/timeline' component={Timedline} />
          <Route path='/contact' component={ContactMe} />
        </Switch>
      </Router>   
    </>
  );
}

export default App;
