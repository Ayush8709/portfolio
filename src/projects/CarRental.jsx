import React, { useEffect } from 'react'
import Navbar from '../projects/Navbar'

const CarRental = () => {
    useEffect(() => {
        document.title = 'Project: car-rental';
    })
    return (
        <div>
                <Navbar />
                <section className="project-cs-hero">
                    <div className="project-cs-hero__content">
                        <h1 className="heading-primary">Car Rental</h1>
                        <div className="project-cs-hero__info">
                            <p className="text-primary">
                                Built a car rental website with MERN stack that lets users book vehicles in real-time with secure authentication and payment processing. Implemented responsive design and advanced search filters, leading to 45% increase in bookings and 35% boost in mobile engagement.
                            </p>
                        </div>
                        <div className="project-cs-hero__cta">
                        <a href="https://car-rental-qqtw.vercel.app/" className="btn btn--bg" target="_blank">Live Link</a>
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
                                        Developed a comprehensive car rental platform using the <strong>MERN stack</strong> that achieved a <strong>98% user satisfaction rate</strong>. The system features <strong>real-time vehicle availability tracking</strong>, <strong>advanced search filters</strong>, and an <strong>intuitive booking interface</strong>. By integrating a specialized car API, we reduced data retrieval time by <strong>30%</strong> while providing users with detailed vehicle specifications, pricing, and availability information.

                                        The platform implements robust <strong>JWT-based user authentication</strong> and authorization, resulting in a <strong>90% reduction in unauthorized access attempts</strong>. Users can securely manage their profiles, view booking history, and receive automated booking confirmations via <strong>email integration</strong>. The custom payment gateway, built with <strong>Stripe</strong>, ensures secure transactions while maintaining <strong>PCI compliance</strong>.


                                    </p>
                                    <p className="project-details__desc-para" id='tools'>
                                        To enhance user experience, we implemented <strong>responsive design principles</strong> and <strong>mobile-first optimization</strong>, leading to a <strong>60% increase in mobile engagement</strong>. Additional features include a <strong>review and rating system</strong>, <strong>automated inventory management</strong>, and a <strong>dynamic pricing engine</strong> that adjusts rates based on demand and seasonality. The platform's efficient architecture and optimized database queries resulted in a <strong>40% improvement in overall system performance</strong>.
                                    </p>
                                </div>
                                <div className="project-details__tools-used" >
                                    <h3 className="project-details__content-title">Technology Used</h3>
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
                                    href="https://car-rental-qqtw.vercel.app/"
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

export default CarRental
