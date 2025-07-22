import React from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';

// Reusable animation helpers
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8 },
  },
});

const App = () => {
  const handleMenuLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="home-hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="home-hero__content">
          <motion.h1 className="heading-primary" variants={fadeIn(0)}>
            Hey, My name is Ayush Kumar Singh
          </motion.h1>
          <motion.div className="home-hero__info" variants={fadeIn(0.3)}>
            <p className="text-primary">
              I am a skilled Full Stack Developer with expertise in both front-end and back-end technologies. My passion lies in creating high-quality, responsive, and dynamic websites, as well as optimizing code for efficiency and performance.
            </p>
          </motion.div>
          <motion.div className="home-hero__cta" variants={fadeIn(0.5)}>
            <a href="#projects" className="btn btn--bg" onClick={() => handleMenuLinkClick('projects')}>Projects</a>
          </motion.div>
        </div>

        <motion.div className="home-hero__socials" initial="hidden" animate="visible">
          {['linkedin-ico', 'github-ico', 'yt-ico', 'insta-ico'].map((icon, i) => (
            <motion.div
              className="home-hero__social"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <a href="#" className="home-hero__social-icon-link">
                <img src={`./assets/png/${icon}.png`} alt="icon" className="home-hero__social-icon" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="home-hero__mouse-scroll-cont" variants={fadeIn(1)}>
          <div className="mouse" style={{ fontSize: "2rem", paddingLeft: "4px" }}>&#8595;</div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about sec-pad"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="main-container">
          <motion.h2 className="heading heading-sec heading-sec__mb-med" variants={fadeIn(0)}>
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me...
            </span>
          </motion.h2>

          <div className="about__content">
            <motion.div className="about__content-main" variants={fadeIn(0.2)}>
              <h3 className="about__content-title">Get to know me!</h3>
              <p className="about__content-details-para">
                Hello! I'm <strong>Ayush Kumar Singh</strong>, a passionate and dedicated <strong>Full-Stack Developer</strong> with a strong focus on building high-performance, scalable, and user-friendly <strong>web applications</strong>. I specialize in modern web development technologies including <strong>React, Next.js, Node.js with Express, MongoDB, and TypeScript</strong>, alongside a solid foundation in <strong>Java, JavaScript, and Python</strong>. My expertise allows me to create end-to-end solutions that are both efficient and maintainable.
                With a deep understanding of <strong>Data Structures and Algorithms</strong>, I am skilled at solving complex problems and optimizing applications for the best performance.
              </p>
              <a href="#contact" className="btn btn--med btn--theme dynamicBgClr" onClick={() => handleMenuLinkClick('contact')}>Contact</a>
            </motion.div>

            <motion.div className="about__content-skills" variants={fadeIn(0.4)}>
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                {[
                  'HTML', 'CSS', 'Bootstrap', 'TalwindCss', 'JavaScript', 'TypeScript', 'React', 'Next Js',
                  'Node', 'Express', 'Mongodb', 'MySql', 'Java', 'Python', 'OOPS', 'Git', 'Github', 'Responsive Design'
                ].map((skill, i) => (
                  <motion.div
                    className="skills__skill"
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="projects sec-pad"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact sec-pad dynamicBg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="main-container">
          <motion.h2
            className="heading heading-sec heading-sec__mb-med"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="heading-sec__main heading-sec__main--lt">Contact</span>
            <span className="heading-sec__sub heading-sec__sub--lt">
              Feel free to contact me by submitting the form below. I’ll do my best to get back to you as soon as possible!
              Whether you have a question, a project idea, or just want to connect — I’d love to hear from you.
            </span>
          </motion.h2>

          <motion.div
            className="contact__form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact__form">
              <motion.div
                className="contact__form-field"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="contact__form-label">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" className="contact__form-input" required />
              </motion.div>

              <motion.div
                className="contact__form-field"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="contact__form-label">Email</label>
                <input type="text" id="email" name="email" placeholder="Enter Your Email" className="contact__form-input" required />
              </motion.div>

              <motion.div
                className="contact__form-field"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="contact__form-label">Message</label>
                <textarea id="message" name="message" rows="10" placeholder="Enter Your Message" className="contact__form-input" required />
              </motion.div>

              <motion.button
                type="submit"
                className="btn btn--theme contact__btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default App;
