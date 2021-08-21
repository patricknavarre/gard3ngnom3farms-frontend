import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>

    </Router>
  );
}

export default App;
