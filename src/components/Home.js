import React from 'react'
import banner from '../assets/images/header_bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
export default function Home() {
    return(
        <section id="home" className="Home">
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
        </section>
    )
} 