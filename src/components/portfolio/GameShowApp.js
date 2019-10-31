import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

const GameShowApp = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>Game Show App</h1>
                <div className="portfolio-content">
                    <img src={require("../images/gameshowapp.png")} alt=""/>
                    <div className="content-text">
                        <p>In this project I've created a browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.</p>
                        <p>Using Javascript, I've created an array of phrases and wrote functions to choose a random phrase from that array, split the phrase into letters, and put those letters onto the gameboard, if guessed correctly.</p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/techdegree-project-7" target="_blank">LIVE DEMO</a>
                    <a href="https://github.com/josprins/techdegree-project-7" target="_blank"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GameShowApp;