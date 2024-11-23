import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="main-footer">
                <div class="main-container">
                    <div class="main-footer__upper">
                        <div class="main-footer__row main-footer__row-1">
                            <h2 class="heading heading-sm main-footer__heading-sm">
                                <span>Social</span>
                            </h2>
                            <div class="main-footer__social-cont">
                                <a target="_blank" rel="noreferrer" href="#">
                                    <img
                                        class="main-footer__icon"
                                        src="./assets/png/linkedin-ico.png"
                                        alt="icon"
                                    />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Ayush8709">
                                    <img
                                        class="main-footer__icon"
                                        src="./assets/png/github-ico.png"
                                        alt="icon"
                                    />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <img
                                        class="main-footer__icon"
                                        src="./assets/png/twitter-ico.png"
                                        alt="icon"
                                    />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <img
                                        class="main-footer__icon"
                                        src="./assets/png/yt-ico.png"
                                        alt="icon"
                                    />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <img
                                        class="main-footer__icon main-footer__icon--mr-none"
                                        src="./assets/png/insta-ico.png"
                                        alt="icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="main-footer__row main-footer__row-2">
                            <h4 class="heading heading-sm text-lt">Ayush Kumar Singh</h4>
                            <p class="main-footer__short-desc">
                                A Full Stack Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product
                            </p>
                        </div>
                    </div>


                    <div class="main-footer__lower">
                        &copy; Copyright 2024. Made by
                        <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"
                        >Ayush Kumar Singh</a
                        >
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
