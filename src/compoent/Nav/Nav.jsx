import React, { useRef, useState, useEffect } from "react";
import navCSS from './Nav.module.css'


function Nav () {
    const menu = useRef();
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuhandler = () => {
        if (!menu.current) return;
        const isOpen = menu.current.classList.toggle(navCSS.openMenu);
        // toggle page scroll lock while the drawer is open
        if (isOpen) document.body.classList.add('no-scroll');
        else document.body.classList.remove('no-scroll');
    }

    // Close drawer with right->left animation when a link is clicked.
    const handleLinkClick = (e, linkName) => {
        setActiveLink(linkName);
        
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
        <div className={`${navCSS.nav} ${scrolled ? navCSS.scrolled : ''}`}>
            {/* Animated background elements */}
            <div className={navCSS.navGlow}></div>
            <div className={navCSS.navLine}></div>
            
            <div className={navCSS.logo}>
                <a href="#Home">
                    <span className={navCSS.logoText}>LP</span>
                    <span className={navCSS.logoDot}></span>
                </a>
            </div>

            <ul ref={menu} className={navCSS.navLinks}>
                {['Home', 'about', 'Experience', 'Projects', 'contact'].map((item, index) => (
                    <li key={item} style={{ '--i': index }}>
                        <a 
                            href={`#${item}`} 
                            onClick={(e) => handleLinkClick(e, item)}
                            className={activeLink === item ? navCSS.active : ''}
                        >
                            <span className={navCSS.linkText}>{item === 'about' ? 'About' : item}</span>
                            <span className={navCSS.linkGlow}></span>
                            <span className={navCSS.linkLine}></span>
                        </a>
                    </li>
                ))}
                {/* Floating indicator */}
                <div className={navCSS.navIndicator}></div>
            </ul>

            {/* Futuristic hamburger */}
            <div className={navCSS.hamburger} onClick={menuhandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Nav