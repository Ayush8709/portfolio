import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../projects/Navbar';
import coffe from '../../public/assets/jpeg/coffe.jpg';

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

const CoffeShop = () => {
  useEffect(() => {
    document.title = 'Project: coffee-shop';
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
            Coffee Shop
          </motion.h1>

          <motion.div variants={itemVariants} className="project-cs-hero__info">
            <p className="text-primary">
              I developed a coffee shop platform using the MERN stack, making ordering fast and easy with real-time updates. The customizable menus and secure Stripe payments helped boost mobile orders by 75%, and the loyalty rewards program improved customer retention by 40%.
            </p>
          </motion.div>

          <motion.div variants={buttonVariants} className="project-cs-hero__cta">
            <a
              href="https://coffeshopme.netlify.app/"
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
                src={coffe}
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
                  I built this coffee shop web app using React, Express, and a NoSQL database, covering all core features. The platform lets users track their orders in real-time, customize menus easily, and enjoy a smooth ordering experience.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="project-details__desc-para"
                  id="tools"
                  style={{ marginTop: '1rem' }}
                >
                  With 98% mobile compatibility and responsive design, it works flawlessly on all devices. I integrated a custom Coffee API and payment gateway to cut transaction time by half, making checkout quick and user-friendly.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="project-details__desc-para"
                  style={{ marginTop: '1rem' }}
                >
                  The app is fully responsive, ensuring customers have a great experience anywhere. Features like a loyalty rewards program and automated order notifications helped boost customer retention by 90%.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="project-details__tools-used" style={{ marginTop: '2rem' }}>
                <h3 className="project-details__content-title">Tools Used</h3>
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
                  href="https://coffeshopme.netlify.app/"
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

export default CoffeShop;
