import React from 'react'
// import logo from './assets/images/my-logo.png';
export default function Header() {
    return(
        
        
            <div className="container">
                <nav>
                    {/* <a className="logo" href="#">
                        <img src={logo} alt="logo" />
                    </a> */}
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
       
    )
}