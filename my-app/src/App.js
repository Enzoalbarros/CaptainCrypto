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
                <div className="flex items-center justify-center mt-8">
                  <div className='text-center '>
                  <h1 className="text-8xl font-bold mb-20">The Crypto Captain</h1>
                  <img 
                    src="/images/pirateLogo.webp"
                    alt="logo" 
                    className="mx-auto mb-8 w-48 h-48 object-cover rounded-full"
                  />
                  <ul className='text-4xl'>
                    <li>
                    <Link to="/information">
                    <button className="btn m-12 bg-gray-500">Go to Information</button>
                  </Link>
                    </li>
                    <li>
                    <Link to="/calculator">
                    <button className="btn m-12 bg-gray-500">Go to Calculator</button>
                  </Link>
                    </li>
                    <li>
                    <Link to="/opportunities">
                    <button className="btn m-12 bg-gray-500">Go to Opportunities</button>
                  </Link>
                    </li>
                    <li>
                    <Link to="/estimator">
                    <button className="btn m-12 bg-gray-500">Go to Estimator</button>
                  </Link>
                    </li>
                  </ul>
                  </div>
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

