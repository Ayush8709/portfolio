import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../projects/Navbar';
import placementImage from '../../public/assets/jpeg/placement.jpg'; // Make sure this image exists or update path

// Animation variants
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

const AiPlacement = () => {
  useEffect(() => {
    document.title = 'Project: College-Placement Cell & AI Interview';
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
            College-Placement & AI Interview
          </motion.h1>

          <motion.div variants={itemVariants} className="project-cs-hero__info">
            <p className="text-primary">
              Developed a smart campus placement portal using <strong>Next.js</strong> and <strong>Firebase</strong> with role-based dashboards. Integrated an AI-powered interview module with dynamic MCQs and instant performance feedback — improving student preparedness by over 60%.
            </p>
          </motion.div>

          <motion.div variants={buttonVariants} className="project-cs-hero__cta">
            <a
            //   href="https://github.com/Ayush8709"
              href="https://placement-cell-ai-interview.vercel.app/"
              className="btn btn--bg"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Details Section */}
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
            {/* Image */}
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
                src={placementImage}
                alt="Placement Portal Screenshot"
                className="project-details__showcase-img"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              className="project-details__content-main"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="project-details__desc">
                <motion.h3 variants={itemVariants} className="project-details__content-title">
                  Project Overview
                </motion.h3>

                <motion.p variants={itemVariants} className="project-details__desc-para">
                  This smart campus placement platform is designed with a student-first mindset. Using <strong>Next.js</strong> and <strong>Firebase</strong>, the system supports role-based dashboards for admins, companies, and students — ensuring streamlined workflows.
                </motion.p>

                <motion.p variants={itemVariants} className="project-details__desc-para" id="tools">
                  The AI mock interview module automatically generates <strong>MCQs</strong> tailored to each user's profile and scores them in real-time, helping students prepare better. This boosted student readiness by <strong>60%</strong> based on feedback.
                </motion.p>

                <motion.p variants={itemVariants} className="project-details__desc-para">
                  Automated job postings, real-time notifications, and feedback systems replaced manual efforts — reducing HR workload by <strong>70%</strong>. The platform also achieved a <strong>95%+ Lighthouse score</strong> using <strong>Tailwind CSS</strong>, ensuring speed and responsiveness.
                </motion.p>
              </motion.div>

              {/* Tools */}
              <motion.div variants={itemVariants} className="project-details__tools-used" style={{ marginTop: '2rem' }}>
                <h3 className="project-details__content-title">Technology Used</h3>
                <div className="skills">
                  {['Next.js', 'Firebase', 'Tailwind CSS', 'AI Module', 'MCQ Engine'].map(tool => (
                    <div key={tool} className="skills__skill">{tool}</div>
                  ))}
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                variants={itemVariants}
                className="project-details__links"
                id="link"
                style={{ marginTop: '2rem' }}
              >
                <h3 className="project-details__content-title">See Code</h3>
                <a
                  href="https://placement-cell-ai-interview.vercel.app/"
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
                >
                  GitHub Link
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AiPlacement;
