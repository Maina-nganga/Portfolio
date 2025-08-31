
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from "./Components/About";
import Services from './Components/Services';
import Contact from './Components/Contact';
import "./index.css"
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
     <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
     
      <Route path="/Contacts" element={<Contact />} />
    </Routes> 
  </Router>
  </ThemeProvider>
  
 
  
  );
}

export default App;
