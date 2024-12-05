import React, { useEffect } from 'react'
import Navbar from '../projects/Navbar'
import ecommarce from '../../public/assets/jpeg/ecommarce.jpeg'


const Ecommarce = () => {
    useEffect(()=>{
        document.title = 'Project: ecommerce';
    })
    return (
        <div>
                <Navbar />
                <section className="project-cs-hero">
                    <div className="project-cs-hero__content">
                        <h1 className="heading-primary">Ecommarce</h1>
                        <div className="project-cs-hero__info">
                            <p className="text-primary">
                                Built a full-stack e-commerce platform with MERN stack featuring secure payments, real-time inventory tracking, and responsive design, resulting in 40% faster transactions and 50% increase in mobile engagement.
                            </p>
                        </div>
                        <div className="project-cs-hero__cta">
                        <a href="https://next-ecoshop.vercel.app/" className="btn btn--bg" target="_blank">Live Link</a>
                        </div>
                    </div>
                </section>
                <section className="project-details" id='overview'>
                    <div className="main-container">
                        <div className="project-details__content">
                            <div className="project-details__showcase-img-cont">
                                <img
                                    src={ecommarce}
                                    alt="Project Image"
                                    className="project-details__showcase-img"
                                />
                            </div>
                            <div className="project-details__content-main">
                                <div className="project-details__desc">
                                    <h3 className="project-details__content-title">Project Overview</h3>
                                    <p className="project-details__desc-para">
                                        Engineered a modern e-commerce platform using <strong>Next.js</strong> and <strong>TypeScript</strong>, achieving a <strong>45% improvement</strong> in page load times through <strong>server-side rendering</strong> and <strong>static site generation</strong>. Implemented advanced features including <strong>dynamic product filtering</strong>, <strong>real-time inventory management</strong>, and <strong>responsive image optimization</strong> that enhanced the shopping experience across all devices.

                                       
                                    </p>
                                    <p className="project-details__desc-para" id='tools'>
                                        Integrated <strong>Stripe payment processing</strong> and <strong>secure user authentication</strong>, resulting in a <strong>99.9% transaction success rate</strong>. The platform's <strong>intuitive cart management</strong> and <strong>streamlined checkout process</strong> led to a <strong>35% reduction</strong> in cart abandonment rates. Enhanced <strong>SEO optimization</strong> and <strong>performance metrics</strong> resulted in a <strong>60% increase</strong> in organic traffic and improved search engine rankings.
                                    </p>
                                </div>
                                <div className="project-details__tools-used" >
                                    <h3 className="project-details__content-title">Technology Used</h3>
                                    <div className="skills">
                                        <div className="skills__skill">Next</div>
                                        <div className="skills__skill">Mongodb</div>
                                    </div>
                                </div>
                                <div className="project-details__links" id='link'>
                                    <h3 className="project-details__content-title">See Live</h3>
                                    <a
                                    href="https://next-ecoshop.vercel.app/"
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

export default Ecommarce
