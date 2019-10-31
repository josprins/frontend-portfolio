import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            email: {
                firstName: '',
                lastName: '',
                email: '',
                subject: 'e-mail from website',
                text: ''
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        // const { email } = this.state;
        return (
            <div className="main-contact">
                <Navigation />
                <div className="contact-wrap-div">
                    <div className="container-div">
                        <h1>Contact</h1>
                        <a href="mailto:jco.prins@gmail.com"><p>JCO.PRINS<span className="at">@</span>GMAIL.COM</p></a>
                        <a href="https://www.linkedin.com/in/jos-prins-bba29621/"><i className="fab fa-linkedin social-btn"></i></a>
                        <a href="https://github.com/josprins?tab=repositories"><i className="fab fa-github-square social-btn"></i></a>
                        {/* <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">First Name</label>
                                </div>
                                <div className="col-75">
                                    <input 
                                        type="text" 
                                        id="fname" 
                                        name="firstname" 
                                        placeholder="Your name.."
                                        onChange={e => this.setState({email: {...email, firstName: e.target.value}})}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Last Name</label>
                                </div>
                                <div className="col-75">
                                    <input 
                                        value={email.lastName} 
                                        type="text" 
                                        id="lname" 
                                        name="lastname" 
                                        placeholder="Your last name.."
                                        onChange={e => this.setState({ email: {...email, lastName: e.target.value} })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Email</label>
                                </div>
                                <div className="col-75">
                                    <input 
                                        value={email.email} 
                                        type="email" 
                                        id="lname" 
                                        name="lastname" 
                                        placeholder="Your email address.."
                                        onChange={e => this.setState({ email: {...email, email: e.target.value} })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Message</label>
                                </div>
                                <div className="col-75">
                                    <textarea 
                                        value={email.text} 
                                        id="subject" 
                                        name="subject" 
                                        placeholder="Write something.."
                                        onChange={e => this.setState({ email: {...email, text: e.target.value} })}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <input className="submit-btn" type="submit" value="Submit"/>
                            </div>
                        </form> */}
                    </div>
                </div>
                <Footer />
            </div>
           
        );
    }
    
};

export default Contact;