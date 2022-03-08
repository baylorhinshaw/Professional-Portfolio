import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Menu from './components/common/Menu';

function App() {
  return (
    <Router>
      <body>
        <Routes>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/project1' element={<Project1/>}/>
          <Route path='/project2' element={<Project2/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </body>
    </Router>
    // This only needs to include your Router, Routes, Route, etc.
  );
}

export default App;
