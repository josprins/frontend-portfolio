import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

const InteractiveVideoPlayer = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>Interactive Video Player</h1>
                <div className="portfolio-content">
                    <img src={require("../images/videoplayer.png")} alt=""/>
                    <div className="content-text">
                        <p>In this project I've build an HTML5 video player using JavaScript and the HTML5 Video API</p>
                        <p>The transcript placed below the video highlights as the video progresses.</p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/techdegree-project-6/">LIVE DEMO</a>
                    <a href="https://github.com/josprins/techdegree-project-6"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InteractiveVideoPlayer;