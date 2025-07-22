import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // <- Added

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        document.title = 'My Portfolio';
    };

    const handleMenuLinkClick = (section) => {
        setMenuOpen(false);
        switch (section) {
            case 'home':
                document.title = 'Home';
                break;
            case 'about':
                document.title = 'About Me';
                break;
            case 'projects':
                document.title = 'Projects';
                break;
            case 'contact':
                document.title = 'Contact';
                break;
            default:
                document.title = 'Ayush Singh';
        }
    };

    return (
        <motion.header
            className="header"
            id="home"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="header__content">
                <div className="header__logo-container" onClick={handleLogoClick}>
                    <div className="header__logo-img-cont">
                        <img
                            src="./assets/png/myimg.png"
                            alt="Ayush Singh Logo"
                            className="header__logo-img"
                        />
                    </div>
                    <span className="header__logo-sub">Ayush Singh</span>
                </div>

                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <Link to="/" className="header__link" onClick={() => handleMenuLinkClick('home')}>
                                Home
                            </Link>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="#about" className="header__link" onClick={() => handleMenuLinkClick('about')}>
                                About
                            </a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="#projects" className="header__link" onClick={() => handleMenuLinkClick('projects')}>
                                Projects
                            </a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="#contact" className="header__link" onClick={() => handleMenuLinkClick('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="header__main-ham-menu-cont">
                        <img
                            src="./assets/svg/ham-menu.svg"
                            alt="hamburger menu"
                            className={`header__main-ham-menu ${menuOpen ? 'd-none' : ''}`}
                            onClick={() => setMenuOpen(true)}
                        />
                        <img
                            src="./assets/svg/ham-menu-close.svg"
                            alt="close menu"
                            className={`header__main-ham-menu-close ${menuOpen ? '' : 'd-none'}`}
                            onClick={() => setMenuOpen(false)}
                        />
                    </div>
                </div>
            </div>

            {/* Animate small menu using AnimatePresence */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="header__sm-menu header__sm-menu--active"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="header__sm-menu-links">
                            <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('home')}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('about')}>
                                <a href="#about">About</a>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('projects')}>
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('contact')}>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
