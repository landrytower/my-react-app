import React, { useRef } from "react";
import navCSS from './Nav.module.css'

function Nav () {
    const menu = useRef();

    const menuhandler = () => {
        menu.current.classList.toggle(navCSS.openMenu);
    }

    return (
        <div className={navCSS.nav}>
            <div className={navCSS.logo}>
                <a href="#">landry</a>
            </div>

            <ul ref={menu}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuhandler}></i>

        </div>
    )
}

export default Nav