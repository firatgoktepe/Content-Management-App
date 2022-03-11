import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import { Provider } from 'react-redux'
import { store } from './state'
import HomePage from './home/HomePage';
import ProjectPage from './projects/ProjectPage';

function App() {
  return (
  <Provider store={store}>
    <Router>
      <>
      <header className="sticky">
        <span className="logo"> 
          <img src="/assets/logo-3.svg" alt="logo" width="50" height="100" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          <span className="icon-calendar"></span>
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/projects/:id" component={ProjectPage} />
        </Switch>
      </div>
      </>
    </Router>
  </Provider>      
  );
}

export default App;
