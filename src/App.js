import React ,{useEffect , useState} from "react";
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

	const [scroll , setScroll] = useState(window.pageYOffset);
	const [sticky , setSticky] = useState(false);

	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			setScroll(window.pageYOffset);
			if (scroll > 150) {
				setSticky(true)
			}else{
				setSticky(false)
			}
		})
	},[scroll])


	const sections = document.querySelectorAll('section');
	const items = document.querySelectorAll('li');
	let current = '';
	window.addEventListener('scroll', ()=>  {
		sections.forEach(section => {	
			let sectionTop = section.offsetTop;
			let sectionHeight = section.clientHeight;
			if(window.pageYOffset >= sectionTop){
				current = section.getAttribute('id');
				console.log(current);
			}	
		})
		items.forEach( li => {
			li.classList.remove('active');
			if(li.classList.contains(current)){
				li.classList.add('active');
			}
		})
	})
  return (
    <>
    <div className="App">
		<header className={`${sticky ? "sticky":''}`}>
		<div className="container">
			<nav>
				<a className="logo" href="#">
					<img src={logo} alt="logo" />
				</a>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li className="about">
						<a href="#about">About</a>
					</li>
					<li className="resume">
						<a href="#resume">Resume</a>
					</li>
					{/* <li>
						<a href="#">Gallery</a>
					</li> */}
					<li className="contact">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
    	
  <div className="bannerImg">
			<img src={banner} alt="header-bg" className="img-fluid"/>
			<div className="caption">
				<h1>I'm Arsal Khalid.</h1>
				<p>I'm a LAHORE based UI/UX frontend <span>Web Developer</span>. A motivated Software developer having in-depth knowledge of languages and development tools, seeking to ﬁnd the opportunity to work in a fun, challenging and growth-oriented organization that encourages in learning new and necessary skills so that mutual benefit can be attained.</p>
				<ul className="social">
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
    </>
  );
}

export default App;

