import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../projects/Navbar';
import resturant from '../../public/assets/jpeg/resturant.jpg';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ResturantMange = () => {
  useEffect(() => {
    document.title = 'Project: restaurant management';
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
            Restaurant Management
          </motion.h1>

          <motion.div variants={itemVariants} className="project-cs-hero__info">
            <p className="text-primary">
              Created a powerful backend-driven restaurant management system using Node.js and Express, packed with order tracking, menu updates, and staff scheduling features.
            </p>
          </motion.div>

          <motion.div variants={buttonVariants} className="project-cs-hero__cta">
            <a
              href="https://github.com/Ayush8709"
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
                src={resturant}
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
                  Built a backend-focused restaurant management platform with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. It efficiently handles secure payment processing and order management, giving restaurants the tools to streamline operations while protecting customer data.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="project-details__desc-para"
                  id="tools"
                  style={{ marginTop: '1rem' }}
                >
                  Key features include real-time order tracking, flexible menu management, and staff scheduling. The robust backend architecture ensures fast, scalable performance, making it an ideal solution for today’s busy restaurant environments.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="project-details__tools-used" style={{ marginTop: '2rem' }}>
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  <div className="skills__skill">Node.js</div>
                  <div className="skills__skill">Express.js</div>
                  <div className="skills__skill">MongoDB</div>
                  <div className="skills__skill">JWT</div>
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
                  href="https://github.com/Ayush8709"
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

export default ResturantMange;
