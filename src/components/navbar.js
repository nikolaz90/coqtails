import logo from '../abstract-2022613_1280.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=>{
    return (
        <nav className='nav'>
            <div className='nav-content'>
                <Link to='pers_projects/coqtails'>
                    <img className='logo' src={logo} alt='logo'></img>
                </Link>
                
                
                <ul className='links-container'>
                    <li>
                        <Link to='pers_projects/coqtails'>Home</Link>
                    </li>
                    <li>
                        <Link to='pers_projects/coqtails/about'>About</Link>
                    </li>
                </ul>
            </div>
            <h1 className='title-1'>Coqtails</h1>
        </nav>


    )
}






export default Navbar; 