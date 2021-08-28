import React from 'react';
import emailjs from 'emailjs-com';

import gmail from './gmail-icon-logo-svgrepo-com (1).svg'
import linkedin from './linkedin-svgrepo-com (5).svg'
import twitter from './twitter-svgrepo-com (1).svg'

function Contact() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_1bvbdio', e.target,
         'user_ldZHToZP8jVCdm3gcwBmO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <>
            <div className="contact-header">
                <h2>Contact me</h2>
            </div>
            <div className='contact-container'>
                
                <form action="" onSubmit={sendEmail}>
                    <div className="form-content">
                        <label htmlFor="Name">Name</label>
                        <input type="text" name='Name' />
                    </div>
                    <div className="form-content">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name='Email'/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="Title">Title</label>
                        <input type="text" name='Title'/>
                    </div>
                    <div className="form-content">
                        <label htmlFor="Message">Message</label>
                        <input type="text" name='Message'/>
                    </div>
                    <button type='submit'className='contact-btn'>send</button>
                </form>
                <div className="socials">
                    <div className="social">
                        <a href="https://www.linkedin.com/in/victor-gbaye-80244620a/">
                            <img src={linkedin} alt="" className='socials-icon'/>
                        </a>
                        <p>Linkedin</p>
                    </div>
                    <div className="social">
                        <a href="mailto:victorgbayedev@gmail.com">
                            <img src={gmail} alt="" className='socials-icon'/>
                        </a>
                        <p>Mail</p>
                    </div>
                    <div className="social">
                            <a href="https://twitter.com/tomiwa_of_mars">
                                <img src={twitter} alt="" className='socials-icon'/>
                            </a>
                            <p>Twitter</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
