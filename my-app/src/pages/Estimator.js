import React from 'react';
import { Link } from 'react-router-dom';


const Estimator = () => {
    return (
        <div>
            <h1>Estimator Page</h1>
            <p>This is the Estimator page content.</p>
            <Link to="/">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default Estimator;