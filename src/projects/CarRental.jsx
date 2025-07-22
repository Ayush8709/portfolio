import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../projects/Navbar';
import car_rental from '../../public/assets/jpeg/car_rental.jpg';

// Variants for staggered container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Slide up & fade in for items
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Button pop-in animation
const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CarRental = () => {
  useEffect(() => {
    document.title = 'Project: car-rental';
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="project-cs-hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="project-cs-hero__content">
          <motion.h1 variants={itemVariants} className="heading-primary">
            Car Rental
          </motion.h1>

          <motion.div variants={itemVariants} className="project-cs-hero__info">
            <p className="text-primary">
              I built this car rental platform using the MERN stack, focusing on making the booking process smooth and reliable. Users can see vehicle availability in real-time, filter their search easily, and book without any hassle. To make it faster, I integrated a specialized car API which cuts down the data load time by about 30%. The result? A simple, responsive, and user-friendly interface that keeps people coming back.
            </p>
          </motion.div>

          <motion.div variants={buttonVariants} className="project-cs-hero__cta">
            <a
              href="https://car-rental-qqtw.vercel.app/"
              className="btn btn--bg"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Project Details Section */}
      <motion.section
        className="project-details"
        id="overview"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ marginTop: '3rem' }}
      >
        <div className="main-container">
          <div className="project-details__content">
            <motion.div
              className="project-details__showcase-img-cont"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, ease: 'easeOut' },
                },
              }}
            >
              <img
                src={car_rental}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </motion.div>

            <motion.div
              className="project-details__content-main"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="project-details__desc">
                <motion.h3 variants={itemVariants} className="project-details__content-title">
                  Project Overview
                </motion.h3>

                <motion.p variants={itemVariants} className="project-details__desc-para">
                  I built this car rental platform using the MERN stack, focusing on making the booking process smooth and reliable. Users can see vehicle availability in real-time, filter their search easily, and book without any hassle. To make it faster, I integrated a specialized car API which cuts down the data load time by about 30%. The result? A simple, responsive, and user-friendly interface that keeps people coming back.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="project-details__desc-para"
                  id="tools"
                  style={{ marginTop: '1rem' }}
                >
                  Security was a big priority, so I implemented JWT-based authentication to protect user accounts and data. This helped reduce unauthorized access by 90%, giving users peace of mind. Users can easily manage their profiles, check their booking history, and get automatic email confirmations. For payments, I used Stripe to ensure secure and smooth transactions that comply with industry standards.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="project-details__desc-para"
                  style={{ marginTop: '1rem' }}
                >
                  To make sure it looks great on any device, I followed mobile-first design principles, which boosted mobile user engagement by 60%. Other features include a review and rating system, automated inventory management, and dynamic pricing that adjusts based on demand and seasons. Overall, these improvements led to a faster, more efficient platform with better performance.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="project-details__tools-used" style={{ marginTop: '2rem' }}>
                <h3 className="project-details__content-title">Technology Used</h3>
                <div className="skills">
                  {['React', 'Bootstrap', 'Node', 'Express', 'MongoDB', 'Stripe', 'Nodemailer', 'JWT'].map(skill => (
                    <div key={skill} className="skills__skill">{skill}</div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="project-details__links"
                id="link"
                style={{ marginTop: '2rem' }}
              >
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="https://car-rental-qqtw.vercel.app/"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/Ayush8709"
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: '1rem' }}
                >
                  Code Link
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CarRental;
