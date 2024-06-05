import React from 'react';
import "./navbar.css";
import contactIcon from 'frontend/myapp/../../assets/contacticon.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className = "navbar">
        <h4 className="heading">Shalini Rajamani</h4>
        <div className="desktopmenu">
            <Link className='desktopmenuitem'>Home</Link>
            <Link className='desktopmenuitem'>Skills</Link>
            <Link className='desktopmenuitem'>Education</Link>
            <Link className='desktopmenuitem'>Projects</Link>
        </div>
        <button className="desktopmenubtn">
            < img src={contactIcon} alt="contactme" className="desktopmenubtnimg"/> CONTACT ME
        </button>
    </nav>
  )
}

export default Navbar;
