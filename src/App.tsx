import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import HomePage from './home/HomePage';

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo"> 
          <img src="assets/logo-3.svg" alt="logo" width="50" height="100" />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
