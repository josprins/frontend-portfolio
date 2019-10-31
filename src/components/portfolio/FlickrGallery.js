import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'


const FlickrGallery = () => {
    window.scrollTo(0, 0);
    return (
        <div className="portfolio-item-wrapper">
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>FlickR API Gallery</h1>
                <div className="portfolio-content">
                    <img src={require("../images/Results-Layout.png")} alt=""/>
                    <div className="content-text">
                        <p>In this project, I've build an image gallery using React, React-router and Axios to fetch data from the Flickr API.</p>
                        <p>React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.</p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/techdegree-project-11-deploy" target="_blank">LIVE DEMO</a>
                    <a href="https://github.com/josprins/techdegree-project-11-deploy" target="_blank"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FlickrGallery;