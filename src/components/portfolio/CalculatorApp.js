import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

const CalculatorApp = () => {
    window.scrollTo(0, 0);
    return (
        <div data-aos="fade-up">
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>Calculator App</h1>
                <div className="portfolio-content">
                    <img src={require("../images/calculator.png")} alt=""/>
                    <div className="content-text">
                        <p>For this project I've build a calculator app using HTML, CSS and JavaScript</p>
                        <p>I wanted the app to be able to do simple math operations: addition, subtraction, multiplication and division.</p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/calculator/" target="_blank">LIVE DEMO</a>
                    <a href="https://github.com/josprins/calculator" target="_blank"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CalculatorApp;