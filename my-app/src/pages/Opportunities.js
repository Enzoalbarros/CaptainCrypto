import React from 'react';
import { Link } from 'react-router-dom';


const Opportunities = () => {
    return (
        <div>
            <h1>Opportunities Page</h1>
            <p>This is the Opportunities page content.</p>
            <Link to="/">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default Opportunities;