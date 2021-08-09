import React from 'react'
import './Contact.css'

import {FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import {FaTwitterSquare } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div className="contact">

                <form>
                    <div className="form__control">
                        <label htmlFor="name">Name </label>
                        <input type="text" id='name' name='name' />
                    </div>
                    <div className="form__control">
                        <label htmlFor="Email">Email </label>
                        <input type="email" id='Email' name='Email' />
                    </div>
                    <div className="form__control">
                        <label htmlFor="title">Title  </label>
                        <input type="text" id='title' name='title' />
                    </div>
                    <div className="form__control">
                        <label htmlFor="message">Message </label>
                        <input type="text" id='message' name='message' />
                    </div>
                </form>
                <div className="socials__container">
                    <div className="socials">
                        <FaLinkedin className='socials__logo'/>
                        <p>Linkedin</p>
                    </div>
                    <div className="socials">
                        <DiGithubBadge className='socials__logo'/>
                        <p>Github</p>
                    </div>
                    <div className="socials">
                        <FaTwitterSquare className='socials__logo'/>
                        <p>Twitter</p>
                    </div>
                    <div className="socialss">
                        <p>Polywork</p>
                    </div>
                    <div className="socialss">
                        <p>Hashnode</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
