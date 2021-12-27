import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return (
     <section id="contact" className="contact">
        <div className="container"> 
            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                </div>
                If you wish to get in contact with me for an interview or remote job please use the contact form below
            </div>
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
     </section>   
    )
}