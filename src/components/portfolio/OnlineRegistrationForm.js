import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

const OnlineRegistrationForm = () => {
    window.scrollTo(0, 0);
    return (
        <div data-aos="fade-up">
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>Online Registration Form</h1>
                <div className="portfolio-content">
                    <img src={require("../images/signupform.png")} alt=""/>
                    <div className="content-text">
                        <p>In this project I've build a responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes.</p>
                        <p>I've build a mobile and desktop version of the form using media queries, and a "mobile-first" approach.</p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/techdegree-project-three/" target="_blank">LIVE DEMO</a>
                    <a href="https://github.com/josprins/techdegree-project-three" target="_blank"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OnlineRegistrationForm;