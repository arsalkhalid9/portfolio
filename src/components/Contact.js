import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return (
     <section id="contact" className="Contact">
        <div className="container"> 
            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                </div>
                If you wish to get in contact with me for an interview or remote job please use the contact form below
            </div>
            <div className="row">
                <div className="col-md-9">
                    <form>
                        <div className="form-group">
                            <label className="control-label">Name <span>*</span></label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Email <span>*</span></label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Subject</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Message <span>*</span></label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="button-row">
                            <div className="btn btn-primary">
                                <span>Submit</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3">
                    <div className="addressInfo">
                        <h6>Address and Phone</h6>
                        <ul className= "list-unstyled">
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