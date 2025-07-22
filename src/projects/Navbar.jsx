
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // click logo and go to top page
    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        document.title = 'My Portfolio'; 
    };

    // Handle the small menu link click to close the menu and change the title
    const handleMenuLinkClick = (section) => {
        setMenuOpen(false); // Close the menu when a link is clicked
        // Change the document title based on the section clicked
        switch (section) {
            case 'home':
                document.title = 'Home';
                break;
            case 'overview':
                document.title = 'Overview';
                break;
            case 'tools':
                document.title = 'Tools';
                break;
            case 'link':
                document.title = 'Link';
                break;
            default:
                document.title = 'My portfolio';
        }
    };
    return (
        <div>
            <header className="header" id='home'>
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
                                <Link to="/" className="header__link" onClick={() => handleMenuLinkClick('home')}>Home</Link>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="#overview" className="header__link" onClick={() => handleMenuLinkClick('overview')}>Overview</a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="#tools" className="header__link" onClick={() => handleMenuLinkClick('tools')}>Tools</a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="#link" className="header__link" onClick={() => handleMenuLinkClick('link')}>Link</a>
                            </li>
                        </ul>
                        <div className="header__main-ham-menu-cont">
                            {/* Hamburger Menu Icon */}
                            <img
                                src="./assets/svg/ham-menu.svg"
                                alt="hamburger menu"
                                className={`header__main-ham-menu ${menuOpen ? 'd-none' : ''}`} // Hide hamburger when menu is open
                                onClick={() => setMenuOpen(true)} // Open the menu
                            />
                            {/* Close Menu Icon */}
                            <img
                                src="./assets/svg/ham-menu-close.svg"
                                alt="close menu"
                                className={`header__main-ham-menu-close ${menuOpen ? '' : 'd-none'}`} // Hide close icon when menu is closed
                                onClick={() => setMenuOpen(false)} // Close the menu
                            />
                        </div>
                    </div>
                </div>
                {/* Small Menu */}
                <div className={`header__sm-menu ${menuOpen ? 'header__sm-menu--active' : 'd-none'}`}>
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('home')}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('overview')}>
                            <a href="#overview">Overview</a>
                        </li>
                        <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('tools')}>
                            <a href="#tools">Tools</a>
                        </li>
                        <li className="header__sm-menu-link" onClick={() => handleMenuLinkClick('link')}>
                            <a href="#link">Link</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Navbar
