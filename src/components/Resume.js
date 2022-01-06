import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
export default function Resume() {
    return (
        <section className="Resume" id="resume">
            <div className="container">
                <div className="ourDetails">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="ourDetails__title">
                                <span>Education</span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h2>Virtual University</h2> 
                            <i>Bachelors in Information Technology</i>
                            <ul>
                                <li>2016-2020</li>
                            </ul>
                            <p>Graduated with 3.25 CGPA</p>

                            <h2>M.A.O College</h2> 
                            <i>Intermediate (ICS)</i>
                            <ul>
                                <li>2013-2014</li>
                            </ul>
                            <p>Second Division</p>
                             
                            <h2>Govt MC Higher Secondary School Allama Iqbal Road Faisalabad</h2> 
                            <i>Matriculation (Science Group)</i>
                            <ul>
                                <li>2012-2013</li>
                            </ul>
                            <p>Second Division</p>   
                        </div>
                    </div>
                </div>
                <div className="ourDetails">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="ourDetails__title">
                                <span>Work</span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h2>Logics Drive (Pvt Ltd)</h2> 
                            <i>UI/UX Designer</i>
                            <ul>
                                <li>2017-Present</li>
                            </ul>
                            <p>Presented UX designs and solutions to senior staff, evangelizing for user-centric design decisions. Created site layout and user interface using HTML and CSS practices. Developed user-oriented visuals and features using front-end languages, including HTML,to increase site traffic. Collaborated with in-house web designers to create sleek and innovative UI design.</p>
         
                            <h2>Final Year Project</h2> 
                            <i>Trip Karigar (Web Application)</i>
                            <ul>
                                <li>Sublime Text Editor, Notepad ++ or PHP Storm, Xampp, WampServer etc. Core PHP and HTML</li>
                            </ul>
                            <p>Develop a tourism website in which Admin will create new trip/tour plans i.e. 1 day trip to 7 days tour in different northern areas of Pakistan. Admin will also respond to the custom trip/tour queries by the users i.e. Queries regarding quote, itinerary, road map and services which will be provided. <br/>
                                Users can view trips which are already created by the Admin. User can book trip/tour, Users can fiter categorically i.e. 1 day trip, 3 day Tour etc. or by location wise i.e. Naran Tours, Hunza Tours etc. <br/>
                                Users can get a Quote for their Custom trip/tour by filling a form in which they will give all required information i.e. Departure Place, Arrival Place, Number of Days, Nimber of Person, Services required etc. 
                            </p>  

                            <h2>Accomplishments</h2> 
                            <i>A list of accomplishments during my final years at Comsats</i>
                            <ul>
                                <li>Winner of Telenor Hackathon 2018 (Second place).</li>
                                <li>Winner of Start-up weekend Lahore 2018 held at Virtual University (First place).</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="ourDetails">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="ourDetails__title">
                                <span>Skills</span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <p>The following are my skills with level of expertise</p>
                            <div className="mySkills">
                                <div className="mySkills__progress">
                                    <h6>Html5</h6>
                                    <ProgressBar animated now={90} />  
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Css3</h6>
                                    <ProgressBar animated now={90} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Bootstrap</h6>
                                    <ProgressBar animated now={90} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Jquery</h6>
                                    <ProgressBar animated now={60} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>JavaScript</h6>
                                    <ProgressBar animated now={50} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Web Accessibility 508</h6>
                                    <ProgressBar animated now={60} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Sass and Scss</h6>
                                    <ProgressBar animated now={85} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>W3c Validation</h6>
                                    <ProgressBar animated now={100} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Transitions / Animation</h6>
                                    <ProgressBar animated now={80} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Adobe Photoshop</h6>
                                    <ProgressBar animated now={80} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>Vue.js</h6>
                                    <ProgressBar animated now={60} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>React js</h6>
                                    <ProgressBar animated now={50} />
                                </div>
                                <div className="mySkills__progress">
                                    <h6>EmailTemp</h6>
                                    <ProgressBar animated now={90} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}