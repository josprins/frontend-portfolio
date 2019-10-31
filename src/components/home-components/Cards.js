import React from 'react';
import CardItem from './CardItem'

const Cards = () => {
    return (
        <section className="projects">
            <div className="main-portfolio">
                <CardItem 
                    title="Parallax Scrolling Effect" 
                    img={require("../images/paradise.jpg")} 
                    text="This is a sweet scrolling effect."
                    linkTo="/parallaxeffect"
                    linkName="View project"
                    alt="paradise"
                />
                <CardItem   
                    title="Registration Form" 
                    img={require("../images/signupform.png")} 
                    text="Registration or contact form."
                    linkTo="/registrationform"
                    linkName="View project"
                    alt="form-img"
                />
                <CardItem 
                    title="Interactive Video Player" 
                    img={require("../images/videoplayer.png")}
                    text="Making videos interactive."
                    linkTo="/videoplayer"
                    linkName="View project"
                    alt="video-player"
                />
                <CardItem 
                    title="Game Show App" 
                    img={require("../images/gameshowapp.png")}
                    text="A fun word guessing game."
                    linkTo="/gameshow"
                    linkName="View project"
                    alt=""
                />
                <CardItem 
                    title="Todo React App" 
                    img={require("../images/todolist.png")}
                    text="An app to make your own todo list."
                    linkTo="/todoapp"
                    linkName="View project"
                    alt="todo-app-img"
                />
                <CardItem 
                    title="Flickr API Gallery" 
                    img={require("../images/Results-Layout.png")}
                    text="A photo gallery using the FlickR API."
                    linkTo="/flickrgallery"
                    linkName="View project"
                    alt="flickr-gallery-img"
                />    
                <CardItem 
                    title="Calculator App" 
                    img={require("../images/calculator.png")}
                    text="An app that can do basic math operations."
                    linkTo="/calculatorapp"
                    linkName="View project"
                    alt="vscode"
                />            
                <CardItem 
                    title="This Portfolio Website" 
                    img={require("../images/thisportfolio.png")}
                    text="A portfolio site made with React."
                    linkTo="/portfoliowebsite"
                    linkName="View project"
                    alt="vscode"
                />            
            </div>       
            <div className="project-text">
                <h1>Over time, I've gained experience with:</h1>
                <ul className="skill-list">
                    <li className="skills-item"><span className="bullet-point">&#111;</span> Design</li>
                    <li className="skills-item"><span className="bullet-point">&#111;</span> HTML</li>
                    <li className="skills-item"><span className="bullet-point">&#111;</span> CSS</li>
                    <li className="skills-item"><span className="bullet-point">&#111;</span> JavaScript</li>
                </ul>
            </div>   
        </section>
    );
};

export default Cards;