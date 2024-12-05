import React from 'react'
import { Link } from 'react-router-dom'
import car_rental from '../../public/assets/jpeg/car_rental.jpg'
import coffe from '../../public/assets/jpeg/coffe.jpg'
import ecommarce from '../../public/assets/jpeg/ecommarce.jpeg'
import resturant from '../../public/assets/jpeg/resturant.jpg'

//screen ke top par scroll karne ke liye function hai
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const Projects = () => {
    return (
        <>
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                        Here you will find some of the personal projects that I created with each project containing its own case study
                    </span>
                </h2>

                <div className="projects__content">
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={car_rental}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Car Rental</h3>
                            <p className="projects__row-content-desc">
                                Built a car rental website with MERN stack that lets users book vehicles in real-time with secure authentication and payment processing. Implemented responsive design and advanced search filters, leading to 45% increase in bookings and 35% boost in mobile engagement.
                            </p>
                            <Link
                                to="/carrental"
                                className="btn btn--med btn--theme dynamicBgClr"
                                onClick={scrollToTop}
                            >
                                Case Study
                            </Link>
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={coffe}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Coffe Shop</h3>
                            <p className="projects__row-content-desc">
                                Developed a coffee shop platform using MERN stack featuring real-time ordering, customizable menus, and secure Stripe payments. Implemented responsive design and loyalty rewards program, leading to 75% increase in mobile orders and 40% improved customer retention.
                            </p>
                            <Link
                                to="/coffeeshop"
                                className="btn btn--med btn--theme dynamicBgClr"
                                onClick={scrollToTop}
                            >
                                Case Study
                            </Link>
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={ecommarce}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Ecommarce</h3>
                            <p className="projects__row-content-desc">
                                Built MERN e-commerce platform with secure payments and tracking. Achieved 40% faster transactions.
                            </p>
                            <Link
                                to="/ecommerce"
                                className="btn btn--med btn--theme dynamicBgClr"
                                onClick={scrollToTop}
                            >
                                Case Study
                            </Link>
                        </div>
                    </div>
                    <div className="projects__row">
                        <div className="projects__row-img-cont">
                            <img
                                src={resturant}
                                alt="Software Screenshot"
                                className="projects__row-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="projects__row-content">
                            <h3 className="projects__row-content-title">Resturant Mangament</h3>
                            <p className="projects__row-content-desc">
                                Built a restaurant management system with Node && Express stack featuring order tracking, menu management and staff scheduling.
                            </p>
                            <Link
                                to="/restaurant"
                                className="btn btn--med btn--theme dynamicBgClr"
                                onClick={scrollToTop}
                            >
                                Case Study
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
