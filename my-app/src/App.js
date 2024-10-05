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
    <div className='bg-blue-300'>
        <div>
          {/* This is how you make a route */}
          <Router>
            <Routes>
              {/* Route for the home page */}
              <Route path="/" element={
                <div className="flex items-center justify-center">
                  <div className='text-center mt-8'>
                    <img 
                      src="/images/pirateLogo.webp"
                      alt="logo" 
                      className="mx-auto mb-8 w-48 h-48 object-cover rounded-full"
                    />
                  <h1 className="text-8xl font-bold mb-20 font-mono text-red-900">The Crypto Captain</h1>
                  <ul className='text-4xl font-mono font-bold'>
                    <li>
                      <div className='m-12 bg-gray-500 rounded-3xl'>
                        <Link to="/information">
                          <button className="btn m-8 text-black">Information</button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className='m-12 bg-gray-500 rounded-3xl'>  
                          <Link to="/calculator">
                            <button className="btn m-8 text-black">Calculator</button>
                          </Link>
                      </div>
                    </li>
                    <li>
                    <div className='m-12 bg-gray-500 rounded-3xl'>
                        <Link to="/opportunities">
                          <button className="btn m-8 text-black">Opportunities</button>
                        </Link>
                    </div>
                    </li>
                    <li>
                      <div className='m-12 bg-gray-500 rounded-3xl'>
                        <Link to="/estimator">
                          <button className="btn m-8 text-black">Estimator</button>
                        </Link>
                      </div>
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

