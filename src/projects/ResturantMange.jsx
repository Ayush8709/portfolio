import React, { useEffect } from 'react'
import Navbar from '../projects/Navbar'
import resturant from '../../public/assets/jpeg/resturant.jpg'

const ResturantMange = () => {
    useEffect(()=>{
        document.title = 'Project: restaurant management';
    })
    return (
        <div>
                <Navbar />
                <section className="project-cs-hero">
                    <div className="project-cs-hero__content">
                        <h1 className="heading-primary">Resturant Managment</h1>
                        <div className="project-cs-hero__info">
                            <p className="text-primary">
                                Built a restaurant management system with Node && Express stack featuring order tracking, menu management and staff scheduling.
                            </p>
                        </div>
                        <div className="project-cs-hero__cta">
                            <a href="#" className="btn btn--bg" target="_blank">Live Link</a>
                        </div>
                    </div>
                </section>
                <section className="project-details" id='overview'>
                    <div className="main-container">
                        <div className="project-details__content">
                            <div className="project-details__showcase-img-cont">
                                <img
                                    src={resturant}
                                    alt="Project Image"
                                    className="project-details__showcase-img"
                                />
                            </div>
                            <div className="project-details__content-main">
                                <div className="project-details__desc">
                                    <h3 className="project-details__content-title">Project Overview</h3>
                                    <p className="project-details__desc-para">
                                        Developed a restaurant management website focusing solely on the backend using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. This system features secure payment processing, allowing restaurants to manage orders efficiently while ensuring customer data protection.


                                    </p>
                                    <p className="project-details__desc-para" id='tools'>
                                        The platform includes functionalities such as order tracking, menu management, and staff scheduling, which streamline operations and enhance productivity. By implementing a robust backend architecture, the system ensures high performance and scalability, making it an ideal solution for modern restaurant needs.
                                    </p>
                                </div>
                                <div className="project-details__tools-used" >
                                    <h3 className="project-details__content-title">Tools Used</h3>
                                    <div className="skills">
                                        <div className="skills__skill">Nodejs</div>
                                        <div className="skills__skill">Expressjs</div>
                                        <div className="skills__skill">Mongodb</div>
                                        <div className="skills__skill">JWT</div>

                                    </div>
                                </div>
                                <div className="project-details__links" id='link'>
                                    <h3 className="project-details__content-title">See Live</h3>
                                    <a
                                    href="https://github.com/Ayush8709"
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

export default ResturantMange
