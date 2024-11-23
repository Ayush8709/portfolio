import React, { useEffect } from 'react'
import Navbar from '../projects/Navbar'

const ResturantMange = () => {
    useEffect(()=>{
        document.title = 'Project: restaurant management';
    })
    return (
        <div>
            <body>
                <Navbar />
                <section class="project-cs-hero">
                    <div class="project-cs-hero__content">
                        <h1 class="heading-primary">Resturant Managment</h1>
                        <div class="project-cs-hero__info">
                            <p class="text-primary">
                                Built a restaurant management system with Node && Express stack featuring order tracking, menu management and staff scheduling.
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
                                        Developed a restaurant management website focusing solely on the backend using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. This system features secure payment processing, allowing restaurants to manage orders efficiently while ensuring customer data protection.


                                    </p>
                                    <p class="project-details__desc-para" id='tools'>
                                        The platform includes functionalities such as order tracking, menu management, and staff scheduling, which streamline operations and enhance productivity. By implementing a robust backend architecture, the system ensures high performance and scalability, making it an ideal solution for modern restaurant needs.
                                    </p>
                                </div>
                                <div class="project-details__tools-used" >
                                    <h3 class="project-details__content-title">Tools Used</h3>
                                    <div class="skills">
                                        <div class="skills__skill">Nodejs</div>
                                        <div class="skills__skill">Expressjs</div>
                                        <div class="skills__skill">Mongodb</div>
                                        <div class="skills__skill">JWT</div>

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

export default ResturantMange
