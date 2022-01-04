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
                <div className="col-md-9 ">
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
                            <div className="btn btn-primary">Submit</div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3 ">
                    <div className="addressInfo">
                        <h6>Address and Phone</h6>
                        <ul className= "list-unstyled">
                            <li>Shahmir Ali</li>
                            <li>G-13/2 St 44 house 21</li>
                            <li>Islamabad, Federal Capital 44000</li>
                            <li>+92-333-5994574</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </section>   
    )
}