import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
import profilepic from '../assets/images/profile-pic.jpg';
import cv from '../assets/pdf/arsalCV.pdf';
export default function About() { 
    return (
        <section className="About" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="About__image">
                            <img src={profilepic} alt="profile-pic"/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="About__desc">
                            <div className="About__desc--title"> 
                                <h2>About Me</h2>
                            </div>
                                <p>Building stable and maintainable codebases using bootstrap and jquery.
                                    Implementing a mobile-first approach to existing websites.
                                    Collaborating with designers to ensure designs were efficient and
                                    technically sound.
                                    Working directly with clients to develop technical solutions
                                    Conducting testing to identify bugs and UI improvements.
                                </p> 
                            <div className="d-flex justify-content-between">
                                <div className="About__desc--title"> 
                                    <h2>Contact Details</h2>
                                </div>
                                <a href={cv} className="btn btn-primary">
                                    <span>
                                        <FontAwesomeIcon icon={['fas', 'download']} />
                                        Download Resume
                                    </span>
                                </a>
                            </div>
                            <ul>
                                <li>Arsal Khalid</li>
                                <li>H#114 Noor Street Habibullah Road, Lahore</li>
                                <li>+92-305-4704034</li>
                                <li>arsalkhalid99@gmail.com</li>
                            </ul>   
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}
