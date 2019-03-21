import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <div className="container-fluid">
            <Link to="/" className="btn btn-outline-primary">Go Home</Link>
            <Link to="/films" className="btn btn-outline-primary">View Films</Link>
            <Link to="/people" className="btn btn-outline-primary">View People</Link>
        </div>
    );
}

export default Navbar;