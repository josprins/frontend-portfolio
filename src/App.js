import React from 'react';
import './css/styles.css'


import Home from './components/Home'
import Contact from './components/Contact'

import ParallaxEffect from './components/portfolio/ParallaxEffect'
import FlickrGallery from './components/portfolio/FlickrGallery'
import GameShowApp from './components/portfolio/GameShowApp'
import InteractiveVideoPlayer from './components/portfolio/InteractiveVideoPlayer'
import OnlineRegistrationForm from './components/portfolio/OnlineRegistrationForm'
import Todo from './components/portfolio/Todo'
import PortfolioApp from './components/portfolio/PortfolioApp'

import { BrowserRouter, Route } from "react-router-dom";
import CalculatorApp from './components/portfolio/CalculatorApp';




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-wrapper">
          <Route exact path="/" component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path="/parallaxeffect" component={ParallaxEffect}/>
          <Route path="/flickrgallery" component={FlickrGallery}/>
          <Route path="/gameshow" component={GameShowApp}/>
          <Route path="/videoplayer" component={InteractiveVideoPlayer}/>
          <Route path="/registrationform" component={OnlineRegistrationForm}/>
          <Route path="/todoapp" component={Todo}/>
          <Route path="/calculatorapp" component={CalculatorApp}/>
          <Route path="/portfoliowebsite" component={PortfolioApp}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
