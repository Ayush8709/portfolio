import React from 'react';
import { Link } from 'react-router-dom';
import car_rental from '../../public/assets/jpeg/car_rental.jpg';
import coffe from '../../public/assets/jpeg/coffe.jpg';
import ecommarce from '../../public/assets/jpeg/ecommarce.jpeg';
import resturant from '../../public/assets/jpeg/resturant.jpg';
import placement from '../../public/assets/jpeg/placement.jpg'; // Add the image for AI Placement

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const projectsData = [
  {
    id: 1,
    title: 'Car Rental',
    description:
      'Built a car rental website with MERN stack that lets users book vehicles in real-time with secure authentication and payment processing. Implemented responsive design and advanced search filters, leading to 45% increase in bookings and 35% boost in mobile engagement.',
    image: car_rental,
    alt: 'Car Rental Screenshot',
    link: '/carrental',
  },
  {
    id: 2,
    title: 'Coffee Shop',
    description:
      'Developed a coffee shop platform using MERN stack featuring real-time ordering, customizable menus, and secure Stripe payments. Implemented responsive design and loyalty rewards program, leading to 75% increase in mobile orders and 40% improved customer retention.',
    image: coffe,
    alt: 'Coffee Shop Screenshot',
    link: '/coffeeshop',
  },
  {
    id: 3,
    title: 'Ecommerce',
    description:
      'Built MERN e-commerce platform with secure payments and tracking. Achieved 40% faster transactions.',
    image: ecommarce,
    alt: 'Ecommerce Screenshot',
    link: '/ecommerce',
  },
  {
    id: 4,
    title: 'Restaurant Management',
    description:
      'Built a restaurant management system with Node & Express stack featuring order tracking, menu management and staff scheduling.',
    image: resturant,
    alt: 'Restaurant Management Screenshot',
    link: '/restaurant',
  },
  {
    id: 5,
    title: 'College-Placement Cell & AI Interview',
    description:
      'Smart campus portal using Next.js & Firebase with role-based dashboards. Integrated AI mock interviews with auto MCQs & scoring, boosting student readiness by 60%. Automated listings, notifications, and feedback reduced manual effort by 70%.',
    image: placement,
    alt: 'College Placement Screenshot',
    link: '/aiplacement',
  },
];

const Projects = () => {
  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">Projects</span>
        <span className="heading-sec__sub">
          Here you will find some of the personal projects that I created with each project containing its own case study
        </span>
      </h2>

      <div className="projects__content">
        {projectsData.map(({ id, title, description, image, alt, link }) => (
          <div className="projects__row" key={id}>
            <div className="projects__row-img-cont">
              <img src={image} alt={alt} className="projects__row-img" loading="lazy" />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">{title}</h3>
              <p className="projects__row-content-desc">{description}</p>
              <Link
                to={link}
                className="btn btn--med btn--theme dynamicBgClr"
                onClick={scrollToTop}
              >
                Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
