import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../projects/Navbar';
import ecommarce from '../../public/assets/jpeg/ecommarce.jpeg';

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

const Ecommarce = () => {
  useEffect(() => {
    document.title = 'Project: ecommerce';
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
            Ecommarce
          </motion.h1>

          <motion.div variants={itemVariants} className="project-cs-hero__info">
            <p className="text-primary">
              Crafted a robust full-stack e-commerce platform using MERN technologies, delivering secure payments, live inventory updates, and a sleek responsive design. These features combined helped speed up transactions by 40% and boosted mobile user engagement by half.
            </p>
          </motion.div>

          <motion.div variants={buttonVariants} className="project-cs-hero__cta">
            <a
              href="https://next-ecoshop.vercel.app/"
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
                src={ecommarce}
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
                  Developed a cutting-edge e-commerce platform with Next.js and TypeScript, leveraging server-side rendering and static generation to speed up page loads by nearly half. The site features smart product filters, real-time inventory updates, and responsive images to ensure a smooth shopping experience on every device.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="project-details__desc-para"
                  id="tools"
                  style={{ marginTop: '1rem' }}
                >
                  Integrated Stripe for safe and reliable payment processing and implemented secure user authentication. This resulted in an outstanding 99.9% success rate for transactions. The simplified cart and checkout flows decreased cart abandonment by 35%, while enhanced SEO boosted organic traffic by 60%.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="project-details__tools-used" style={{ marginTop: '2rem' }}>
                <h3 className="project-details__content-title">Technology Used</h3>
                <div className="skills">
                  <div className="skills__skill">Next.js</div>
                  <div className="skills__skill">MongoDB</div>
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
                  href="https://next-ecoshop.vercel.app/"
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

export default Ecommarce;
