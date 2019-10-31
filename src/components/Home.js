import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import HomeAbout from './home-components/HomeAbout'
import Cards from './home-components/Cards'

const Home = () => {
    return (
        <div>
            <Navigation />
            <HomeAbout />
            <Cards />
            <Footer />
        </div>
    );
};

export default Home;