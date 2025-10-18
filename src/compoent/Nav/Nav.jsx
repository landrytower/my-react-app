import React, { useRef } from "react";
import navCSS from './Nav.module.css'


function Nav () {
    const menu = useRef();

    const menuhandler = () => {
        if (!menu.current) return;
        const isOpen = menu.current.classList.toggle(navCSS.openMenu);
        // toggle page scroll lock while the drawer is open
        if (isOpen) document.body.classList.add('no-scroll');
        else document.body.classList.remove('no-scroll');
    }

    // Close drawer with right->left animation when a link is clicked.
    const handleLinkClick = (e) => {
        // Only intercept on small screens where the drawer is used
        if (window.innerWidth > 900) return;

        const anchor = e.currentTarget.getAttribute('href');
        // prevent immediate jump so the closing animation can run
        e.preventDefault();

        if (!menu.current) return;

        // remove the open class to trigger the CSS transition (left: -100%)
        menu.current.classList.remove(navCSS.openMenu);

        // wait for the CSS transition to finish before navigating/scrolling
        const TRANSITION_MS = 320;
        setTimeout(() => {
            document.body.classList.remove('no-scroll');

            if (!anchor) return;
            if (anchor.startsWith('#')) {
                const id = anchor.slice(1);
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = anchor;
            } else {
                window.location.href = anchor;
            }
        }, TRANSITION_MS);
    }

    return (
        <div className={navCSS.nav}>
            <div className={navCSS.logo}>
                
            </div>

            <ul ref={menu}>
                <li><a href="#Home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#Experience" onClick={handleLinkClick}>Experience</a></li>
                <li><a href="#Projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>

            <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuhandler}></i>

        </div>
    )
}

export default Nav