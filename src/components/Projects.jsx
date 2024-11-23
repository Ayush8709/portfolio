import React from 'react'

const Projects = () => {

    
    return (
        <>
            <div class="main-container">
                <h2 class="heading heading-sec heading-sec__mb-bg">
                    <span class="heading-sec__main">Projects</span>
                    <span class="heading-sec__sub">
                        Here you will find some of the personal projects that I created with each project containing its own case study
                    </span>
                </h2>

                <div class="projects__content">
                    <div class="projects__row">
                        <div class="projects__row-img-cont">
                            <img
                                src="./assets/jpeg/project-mockup-example.jpeg"
                                alt="Software Screenshot"
                                class="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div class="projects__row-content">
                            <h3 class="projects__row-content-title">Car Rental</h3>
                            <p class="projects__row-content-desc">
                                Built a car rental website with MERN stack that lets users book vehicles in real-time with secure authentication and payment processing. Implemented responsive design and advanced search filters, leading to 45% increase in bookings and 35% boost in mobile engagement.
                            </p>
                            <a
                                href="/car-rental"
                                class="btn btn--med btn--theme dynamicBgClr"

                            >Case Study</a
                            >
                        </div>
                    </div>
                    <div class="projects__row">
                        <div class="projects__row-img-cont">
                            <img
                                src="./assets/jpeg/project-mockup-example.jpeg"
                                alt="Software Screenshot"
                                class="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div class="projects__row-content">
                            <h3 class="projects__row-content-title">Coffe Shop</h3>
                            <p class="projects__row-content-desc">
                                Developed a coffee shop platform using MERN stack featuring real-time ordering, customizable menus, and secure Stripe payments. Implemented responsive design and loyalty rewards program, leading to 75% increase in mobile orders and 40% improved customer retention.
                            </p>
                            <a
                                href="./coffee-shop"
                                class="btn btn--med btn--theme dynamicBgClr"
                            >Case Study</a
                            >
                        </div>
                    </div>
                    <div class="projects__row">
                        <div class="projects__row-img-cont">
                            <img
                                src="./assets/jpeg/project-mockup-example.jpeg"
                                alt="Software Screenshot"
                                class="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div class="projects__row-content">
                            <h3 class="projects__row-content-title">Ecommarce</h3>
                            <p class="projects__row-content-desc">
                                Built MERN e-commerce platform with secure payments and tracking. Achieved 40% faster transactions.
                            </p>
                            <a
                                href="./project-3.html"
                                class="btn btn--med btn--theme dynamicBgClr"
                            >Case Study</a
                            >
                        </div>
                    </div>
                    <div class="projects__row">
                        <div class="projects__row-img-cont">
                            <img
                                src="./assets/jpeg/project-mockup-example.jpeg"
                                alt="Software Screenshot"
                                class="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div class="projects__row-content">
                            <h3 class="projects__row-content-title">Resturant Mangament</h3>
                            <p class="projects__row-content-desc">
                                Built a restaurant management system with Node && Express stack featuring order tracking, menu management and staff scheduling.
                            </p>
                            <a
                                href="./restaurant"
                                class="btn btn--med btn--theme dynamicBgClr"
                            >Case Study</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
