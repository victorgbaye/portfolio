import React from 'react'
import './HeroSction.css'
import arrow from './arrow.svg'
const HeroSection = () => {
    return (
        <>
           <section className='section'>
            <main className='main'>
               <div className="name">
                   <h1>Hello, I'm Victor Gbaye.</h1>
               </div>
               <div className="about">
                  <p>
                  A front end developer who
                   focuses on bringing ideas to life with JavaScript and React js.
                  </p>
               </div>
            </main>
             <img src={arrow} alt="" />
            </section> 
        </>
    )
}

export default HeroSection
