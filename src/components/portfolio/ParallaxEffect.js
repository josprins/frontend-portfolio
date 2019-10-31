import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

const ParallaxEffect = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>Parallax Effect</h1>
                <div className="portfolio-content">
                    <img src={require("../images/paradise.jpg")} alt=""/>
                    <div className="content-text">
                        <p>For this project I've created the parallax effect using just HTML and CSS.</p>
                        <p>Parallax scrolling is a scrolling technique used in computer graphics in which background images move more slowly than images or text in the foreground, creating the illusion of depth and immersion.</p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/parallax">LIVE DEMO</a>
                    <a href="https://github.com/josprins/parallax"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ParallaxEffect;