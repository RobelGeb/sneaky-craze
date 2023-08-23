import './App.css';
//import the state hook function
// import React, { useState } from 'react';

// import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
    </div>
  );
}

export default App;