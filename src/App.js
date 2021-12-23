import React ,{useEffect} from "react";
// import * as React  from 'react';
import logo from './assets/images/my-logo.png';
import banner from './assets/images/header-bg.jpg';
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css';
import "./assets/scss/styles.scss";
import Main from './components/Main'
import Uikit from "./components/Uikit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'



function App() {
  return (
    <>
    <div className="App">
		<header>
			<div className="container">
			<nav>
				<a className="logo" href="#">
					<img src={logo} alt="logo" />
				</a>
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
		</header>
		<div className="contentWrapper">
			<div className="bannerImg">
				<img src={banner} alt="header-bg" className="img-fluid"/>
				<div className="caption">
					<h1>I'm Arsal Khalid.</h1>
					<p>I'm a LAHORE based UI/UX frontend <span>Web Developer</span>. A motivated Software developer having in-depth knowledge of languages and development tools, seeking to ﬁnd the opportunity to work in a fun, challenging and growth-oriented organization that encourages in learning new and necessary skills so that mutual benefit can be attained.</p>
					<ul class="social">
					<li>
						<a href="https://www.facebook.com/arsalkhalid99/">
							<FontAwesomeIcon icon={['fab', 'facebook-f']} />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/arsal-khalid-780424157/">
							<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/arsalyyy/">
							<FontAwesomeIcon icon={['fab', 'instagram']} />
						</a>
					</li>
					</ul>
				</div>
			</div>
			<About />
			<Resume />
			<Contact />
		</div>
    </div>
    </>
  );
}

export default App;

