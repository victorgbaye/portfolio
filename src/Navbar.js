import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className='nav'>
                <div className="nav-links">
                    <ul className='nav-link'>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <a href="">Resume</a>
            </nav>
        </>
    )
}

export default Navbar
