import React from 'react'
export default function Resume() {
    return (
        <section className="resume" id="resume">
            <div className="container">
                <div className="ourDetails">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="ourDetails__title">
                                <span>Education</span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h2>Comsats Islamabad</h2> 
                            <i>Bachelors in Computer Science</i>
                            <ul>
                                <li>January 2020</li>
                            </ul>
                            <p>Graduated with 2.88 CGPA....no idea how</p>

                            <h2>Beaconhouse Margalla Campus Islamabad</h2> 
                            <i>A-levels (engineering)</i>
                            <ul>
                                <li>2014-2016</li>
                            </ul>
                            <p>74% Equivalence</p>
                             
                            <h2>Beaconhouse Margalla Campus Islamabad</h2> 
                            <i>O-levels (Computer Science)</i>
                            <ul>
                                <li>2012-2014</li>
                            </ul>
                            <p>78% Equivalence</p>   
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
                            <h2>Center for advanced research in engineering (C.A.R.E Pvt Ltd)</h2> 
                            <i>UI/UX Designer</i>
                            <ul>
                                <li>March 2020-Present</li>
                            </ul>
                            <p>Presented UX designs and solutions to senior staff, evangelizing for user-centric design decisions. Created site layout and user interface using HTML and CSS practices. Developed user-oriented visuals and features using front-end languages, including HTML,to increase site traffic. Collaborated with in-house web designers to create sleek and innovative UI design.</p>

                            <h2>C.E.N.T.E.C.H (A Subsidiary of Nescom Pakistan</h2> 
                            <i>Ubuntu Developer</i>
                            <ul>
                                <li> July 2019-August 2019</li>
                            </ul>
                            <p>Learning various Ubuntu commands to customize the Ubuntu installer application(ubiquity) to perform various tasks automatically at install time such as installing multiple applications, creating multiple directories and folders, changing file permissions and various update packages. Also created Post install scripts to install/execute pre written scripts by other members of team and had them run at end of Ubuntu installation via preseeding.</p>
                             
                            <h2>Final Year Project</h2> 
                            <i>Real-Time IOT Soil Monitoring System</i>
                            <ul>
                                <li>Reactjs , Nodejs , Mongodb , Firebase , Expressjs , Android Studio , Visual Studio Code , Arduino MEGA , Arduino IDE</li>
                            </ul>
                            <p>The project in collaboration with NARC (National Agriculture Research Council) was built to provide real-time insight into soil constituents and six primary growth factors that affect crop growth namely PH, moisture,temperature,humidity,CO2 emission and electrical conductivity.</p>   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}