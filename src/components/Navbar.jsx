import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
    return (

        <div className="container-fluid">
            <div className="row p-5">
                <img src={Logo} alt="" />
            </div>

            <Link to="/" className="btn btn-outline-primary mt-5">Go Home</Link>
            <Link to="/films" className="btn btn-outline-primary mt-5">View Films</Link>
            <Link to="/people" className="btn btn-outline-primary mt-5">View People</Link>
        </div>
    );
}

export default Navbar;