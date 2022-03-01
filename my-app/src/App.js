import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Menu from './components/common/Menu';

function App() {
  return (
    <body>
      <Menu/>
      <Home/>
      <Project1/>
    </body>
    // This only needs to include your Router, Routes, Route, etc.
  );
}

export default App;
