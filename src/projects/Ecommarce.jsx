import React, { useEffect } from 'react'
import Navbar from '../projects/Navbar'


const Ecommarce = () => {
    useEffect(()=>{
        document.title = 'Project: ecommerce';
    })
    return (
        <div>
            <body>
                <Navbar />
                <section class="project-cs-hero">
                    <div class="project-cs-hero__content">
                        <h1 class="heading-primary">Ecommarce</h1>
                        <div class="project-cs-hero__info">
                            <p class="text-primary">
                                Built a full-stack e-commerce platform with MERN stack featuring secure payments, real-time inventory tracking, and responsive design, resulting in 40% faster transactions and 50% increase in mobile engagement.
                            </p>
                        </div>
                        <div class="project-cs-hero__cta">
                            <a href="#" class="btn btn--bg" target="_blank">Live Link</a>
                        </div>
                    </div>
                </section>
                <section class="project-details" id='overview'>
                    <div class="main-container">
                        <div class="project-details__content">
                            <div class="project-details__showcase-img-cont">
                                <img
                                    src="./assets/jpeg/project-mockup-example.jpeg"
                                    alt="Project Image"
                                    class="project-details__showcase-img"
                                />
                            </div>
                            <div class="project-details__content-main">
                                <div class="project-details__desc">
                                    <h3 class="project-details__content-title">Project Overview</h3>
                                    <p class="project-details__desc-para">
                                        Engineered a modern e-commerce platform using <strong>Next.js</strong> and <strong>TypeScript</strong>, achieving a <strong>45% improvement</strong> in page load times through <strong>server-side rendering</strong> and <strong>static site generation</strong>. Implemented advanced features including <strong>dynamic product filtering</strong>, <strong>real-time inventory management</strong>, and <strong>responsive image optimization</strong> that enhanced the shopping experience across all devices.

                                       
                                    </p>
                                    <p class="project-details__desc-para" id='tools'>
                                        Integrated <strong>Stripe payment processing</strong> and <strong>secure user authentication</strong>, resulting in a <strong>99.9% transaction success rate</strong>. The platform's <strong>intuitive cart management</strong> and <strong>streamlined checkout process</strong> led to a <strong>35% reduction</strong> in cart abandonment rates. Enhanced <strong>SEO optimization</strong> and <strong>performance metrics</strong> resulted in a <strong>60% increase</strong> in organic traffic and improved search engine rankings.
                                    </p>
                                </div>
                                <div class="project-details__tools-used" >
                                    <h3 class="project-details__content-title">Technology Used</h3>
                                    <div class="skills">
                                        <div className="skills__skill">Next</div>
                                        <div className="skills__skill">Mongodb</div>
                                    </div>
                                </div>
                                <div class="project-details__links" id='link'>
                                    <h3 class="project-details__content-title">See Live</h3>
                                    <a
                                        href="#"
                                        class="btn btn--med btn--theme project-details__links-btn"
                                        target="_blank"
                                    >Live Link</a
                                    >
                                    <a
                                        href="#"
                                        class="btn btn--med btn--theme-inv project-details__links-btn"
                                        target="_blank"
                                    >Code Link</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </body>
        </div>
    )
}

export default Ecommarce
