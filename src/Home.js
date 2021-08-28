import React from 'react'

//import pages
import Contact from './Contact'
//
import arrow from './down-arrow-svgrepo-com.svg'
import react from './react-logo-svgrepo-com (1).svg'
import javascript from './javascript-logo-svgrepo-com (1).svg';
import css from './css-3-logo-svgrepo-com.svg';
import html from './html5-svgrepo-com (1).svg';
import git from './git-icon-logo-svgrepo-com.svg';
import github from './github-svgrepo-com (1).svg';
import wave from './waving-hand.png'

function Home() {
    return (
        <>
            <header>
                <div className="header-main">
                    <div className="header-main-intro">
                        <h1>Hello <img src={wave} alt="" className='wave' />, <br/>I’m Victor Gbaye.</h1>
                    </div>
                    <div className="header-main-description">
                        <p>
                        A front end engineer who focuses
                        on bringing ideas to life with Javascript
                        and Reactjs using modern programming principles.
                        </p>
                    </div>
                </div>
                <div className="arrow-container">
                    <img src={arrow} alt="" />
                </div>
            </header>
            <main>
                <a href="https://github.com/victorgbaye"><img src={github} alt="" className="fixed-github"/></a>
                <div className="tech-stack-container">
                    <div className="tech-stack-title">
                        <h2>Tech stack</h2>
                    </div>
                    <div className="tech-stack-icon-text-container">
                        <div className="icon-text">
                            <img src={react} alt="" />
                            <p>Reactjs</p>
                        </div>
                        <div className="icon-text">
                            <img src={javascript} alt="" />
                            <p>Javascript</p>
                        </div>
                        <div className="icon-text">
                            <img src={css} alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="icon-text">
                            <img src={html} alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="icon-text">
                            <img src={git} alt="" />
                            <p>Git</p>
                        </div>
                    </div>
                </div>
                <Contact/>
                
            </main>
        </>
    )
}

export default Home
