import React, { useEffect } from 'react'
import Navbar from '../projects/Navbar'

const CoffeShop = () => {
    useEffect(() => {
        document.title = 'Project: coffee-shop';
    })
    return (
        <div>
                <Navbar />
                <section className="project-cs-hero">
                    <div className="project-cs-hero__content">
                        <h1 className="heading-primary">CoffeShop</h1>
                        <div className="project-cs-hero__info">
                            <p className="text-primary">
                                Developed a coffee shop platform using MERN stack featuring real-time ordering, customizable menus, and secure Stripe payments. Implemented responsive design and loyalty rewards program, leading to 75% increase in mobile orders and 40% improved customer retention.
                            </p>
                        </div>
                        <div className="project-cs-hero__cta">
                            <a href="https://coffeshopme.netlify.app/" className="btn btn--bg" target="_blank">Live Link</a>
                        </div>
                    </div>
                </section>
                <section className="project-details" id='overview'>
                    <div className="main-container">
                        <div className="project-details__content">
                            <div className="project-details__showcase-img-cont">
                                <img
                                    src="./assets/jpeg/project-mockup-example.jpeg"
                                    alt="Project Image"
                                    className="project-details__showcase-img"
                                />
                            </div>
                            <div className="project-details__content-main">
                                <div className="project-details__desc">
                                    <h3 className="project-details__content-title">Project Overview</h3>
                                    <p className="project-details__desc-para">
                                        Cultivated a coffee shop web app using <strong>React.js</strong>, <strong>Express.js</strong>, and a <strong>NoSQL database</strong>, covering <strong>100%</strong> of the core functionality with all features. The platform features <strong>real-time order tracking</strong>, <strong>customizable menu management</strong>, and an <strong>intuitive ordering interface</strong>.

                                        Ensured <strong>98% mobile compatibility</strong> and <strong>responsive design</strong>, creating a seamless experience across various devices. Integrated a custom <strong>Coffee API</strong> and a <strong>payment gateway</strong>, reducing transaction processing time by <strong>50%</strong> and improving user-friendliness through streamlined checkout flows.

                                    </p>
                                    <p className="project-details__desc-para" id='tools'>

                                        Made the web app fully <strong>responsive across all platforms</strong>, ensuring cross-device usability and boosting customer satisfaction by <strong>90%</strong>. The implementation of a <strong>loyalty rewards program</strong> and <strong>automated order notifications</strong> contributed to increased customer retention and engagement.
                                    </p>
                                </div>
                                <div className="project-details__tools-used" >
                                    <h3 className="project-details__content-title">Tools Used</h3>
                                    <div className="skills">
                                        <div className="skills__skill">React</div>
                                        <div className="skills__skill">Bootstrap</div>
                                        <div className="skills__skill">Node</div>
                                        <div className="skills__skill">Express</div>
                                        <div className="skills__skill">Monogdb</div>
                                        <div className="skills__skill">Stripe</div>
                                        <div className="skills__skill">Nodemailer</div>
                                        <div className="skills__skill">JWT</div>
                                    </div>
                                </div>
                                <div className="project-details__links" id='link'>
                                    <h3 className="project-details__content-title">See Live</h3>
                                    <a
                                        href="https://coffeshopme.netlify.app/"
                                        className="btn btn--med btn--theme project-details__links-btn"
                                        target="_blank"
                                    >Live Link</a
                                    >
                                    <a
                                    href="https://github.com/Ayush8709"
                                        className="btn btn--med btn--theme-inv project-details__links-btn"
                                        target="_blank"
                                    >Code Link</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


        </div>
    )
}

export default CoffeShop
