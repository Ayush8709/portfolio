import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link

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
                document.title = 'John Doe';
        }
    };

    return (
        <header className="header" id='home'>
            <div className="header__content">
                <div className="header__logo-container" onClick={handleLogoClick}>
                    <div className="header__logo-img-cont">
                        <img src="./assets/png/myimg.png" alt="Ayush Singh Logo" className="header__logo-img" />
                    </div>
                    <span className="header__logo-sub">Ayush Singh</span>
                </div>

                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <Link to="/" className="header__link" onClick={() => handleMenuLinkClick('home')}>Home</Link>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="#about" className="header__link" onClick={() => handleMenuLinkClick('about')}>About</a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="#projects" className="header__link" onClick={() => handleMenuLinkClick('projects')}>Projects</a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="#contact" className="header__link" onClick={() => handleMenuLinkClick('contact')}>Contact</a>
                        </li>
                    </ul>

                    <div className="header__main-ham-menu-cont">
                        <img src="./assets/svg/ham-menu.svg" alt="hamburger menu"
                            className={`header__main-ham-menu ${menuOpen ? 'd-none' : ''}`}
                            onClick={() => setMenuOpen(true)} />
                        <img src="./assets/svg/ham-menu-close.svg" alt="close menu"
                            className={`header__main-ham-menu-close ${menuOpen ? '' : 'd-none'}`}
                            onClick={() => setMenuOpen(false)} />
                    </div>
                </div>
            </div>

            {/* Small Menu */}
            <div className={`header__sm-menu ${menuOpen ? 'header__sm-menu--active' : 'd-none'}`}>
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
            </div>
        </header>
    );
};

export default Navbar;
