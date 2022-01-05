import React ,{useEffect , useState} from "react";
// import * as React  from 'react';
import logo from './assets/images/my-logo.png';
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Home from './components/Home'
import './App.css';
import "./assets/scss/styles.scss";
import Main from './components/Main'
import Uikit from "./components/Uikit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import ScrollToTop from "react-scroll-to-top";

function App() {

	const [scroll , setScroll] = useState(window.pageYOffset);
	const [sticky , setSticky] = useState(false);

	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			setScroll(window.pageYOffset);
			if (scroll > 120) {
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
			if(window.pageYOffset >= sectionTop - (sectionHeight)/5){
				current = section.getAttribute('id');
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
						<li className="home active">
							<a href="#home">Home</a>
						</li>
						<li className="about">
							<a href="#about">About</a>
						</li>
						<li className="resume">
							<a href="#resume">Resume</a>
						</li>
						<li className="contact">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
    	
  		<Home />
		<About />
		<Resume />
		<Contact />
		<footer>
			<ul>
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
			<ScrollToTop smooth />
		</footer>
    </div>
    </>
  );
}

export default App;

