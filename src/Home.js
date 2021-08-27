import React from 'react'

import arrow from './down-arrow-svgrepo-com.svg'

function Home() {
    return (
        <>
            <header>
                <div className="header-main">
                    <div className="header-main-intro">
                        <h1>Hello, I’m Victor Gbaye.</h1>
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
        </>
    )
}

export default Home
