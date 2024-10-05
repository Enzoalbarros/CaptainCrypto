import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import './pages/Information';
import Information from './pages/Information';

import './pages/Calculator';
import Calculator from './pages/Calculator';

import './pages/Opportunities';
import Opportunities from './pages/Opportunities';

import './pages/Estimator';
import Estimator from './pages/Estimator';


function App() {
  return (
    <div>
        <div>
          {/* This is how you make a route */}
          <Router>
            <Routes>
              {/* Route for the home page */}
              <Route path="/" element={
                <div>
                  <h1 className="text-5xl font-bold">The Crypto Captain</h1> 
                  <ul>
                    <li>
                    <Link to="/information">
                    <button className="btn">Go to Information</button>
                  </Link>
                    </li>
                    <li>
                    <Link to="/calculator">
                    <button className="btn">Go to Calculator</button>
                  </Link>
                    </li>
                    <li>
                    <Link to="/opportunities">
                    <button className="btn">Go to Opportunities</button>
                  </Link>
                    </li>
                    <li>
                    <Link to="/estimator">
                    <button className="btn">Go to Estimator</button>
                  </Link>
                    </li>
                  </ul>
                </div>
              } />
              
              {/* Route for the Information page */}
              <Route path="/information" element={<Information />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/estimator" element={<Estimator />} />
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;

