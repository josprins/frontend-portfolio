import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <Link to="/" className="nav-title"><span>PortfolioWebsite</span></Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </div>
    );
};

export default Navigation;