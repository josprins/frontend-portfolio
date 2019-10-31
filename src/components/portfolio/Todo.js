import React from 'react';
import Navigation from '../Navigation'
import Footer from '../Footer'

const Todo = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Navigation />
            <div className="main-portfolio-item main-parallax">
                <h1>Todo List App</h1>
                <div className="portfolio-content">
                    <img src={require("../images/todolist.png")} alt=""/>
                    <div className="content-div">
                        <p>For this project I've created a todo list app using React.</p>
                        <p>I had to handle props and state in order to share data between components and write functions to handle interaction with the app such as deleting or adding a todo. </p>
                    </div>
                </div>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/todo-deploy/">LIVE DEMO</a>
                    <a href="https://github.com/josprins/todo"><i className="fab fa-github"></i>GITHUB REPOSITORY</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Todo;