import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './pages/Information';
import Information from './pages/Information';


function App() {
  return (
    
    //This is how you go to another page
    <Router>
    <Routes>
      {/* Route for the home page */}
      <Route path="/" element={
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Link to="/information">
            <button className="btn">Go to Information</button>
          </Link>
        </div>
      } />
      
      {/* Route for the Information page */}
      <Route path="/information" element={<Information />} />
    </Routes>
  </Router>
  );
}

export default App;

