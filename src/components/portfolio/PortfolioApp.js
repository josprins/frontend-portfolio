import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

const PortfolioApp = () => {
        window.scrollTo(0, 0);
    return (
        <div>
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>This Portfolio Website</h1>
                <div className="portfolio-content">
                    <img src={require("../images/thisportfolio.png")} alt=""/>
                    <div className="content-text">
                        <p>I created this portfolio using React JS.</p>
                        <p>I've used props and state to control the data flow in this app.</p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://github.com/josprins/portfolio"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PortfolioApp;