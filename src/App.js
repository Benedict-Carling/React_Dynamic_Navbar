import React from 'react';
import './App.css';

import NavBar from './components/nav_components/Nav';
import About from './pages/About';
import Designer from './pages/Designer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/designer" component={Designer} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
  </div>
  )
};

export default App;
