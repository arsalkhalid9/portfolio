import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import profilepic from '../assets/images/profile-pic.jpeg';
export default function About() { 
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="about__image">
                            <img src={profilepic} alt="profile-pic"/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="about__desc">
                            <div className="about__desc--title"> 
                                <h2>About Me</h2>
                            </div>
                            <p>Love coding and scripting in any language.Looking to get more opportunities to advance in my career. Open to any development Jobs.</p> 
                            <div className="d-flex">
                                <div className="about__desc--title"> 
                                    <h2>Contact Details</h2>
                                </div>
                                <a href="#" class="button">
                                <FontAwesomeIcon icon={['fas', 'download']} />
                                    Download Resume
                                </a>
                            </div>
                            <ul>
                                <li>Shahmir Ali</li>
                                <li>G-13/2 St 44 house 21</li>
                                <li>Islamabad Federal Capital, 44000</li>
                                <li>+92-333-5994574</li>
                                <li>shahmir_ali@outlook.com</li>
                            </ul>   
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}
