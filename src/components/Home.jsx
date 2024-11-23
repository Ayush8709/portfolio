import React, { useState } from 'react'
import Projects from './Projects';

const App = () => {

    return (
        <div>
            <body>

                {/* this is header section */}
                
                {/* end of header section */}

                <section className="home-hero">
                    <div className="home-hero__content">
                        <h1 className="heading-primary">Hey, My name is Ayush Kumar Singh</h1>
                        <div className="home-hero__info">
                            <p className="text-primary">
                                I am a skilled Full Stack Developer with expertise in both front-end and back-end technologies. My passion lies in creating high-quality, responsive, and dynamic websites, as well as optimizing code for efficiency and performance.
                            </p>
                        </div>
                        <div className="home-hero__cta">
                            <a href="./#projects" className="btn btn--bg" onClick={() => handleMenuLinkClick('projects')}>Projects</a>
                        </div>
                    </div>
                    <div class="home-hero__socials">
                        <div class="home-hero__social">
                            <a href="#" class="home-hero__social-icon-link">
                                <img
                                    src="./assets/png/linkedin-ico.png"
                                    alt="icon"
                                    class="home-hero__social-icon"
                                />
                            </a>
                        </div>
                        <div class="home-hero__social">
                            <a href="https://github.com/Ayush8709" class="home-hero__social-icon-link">
                                <img
                                    src="./assets/png/github-ico.png"
                                    alt="icon"
                                    class="home-hero__social-icon"
                                />
                            </a>
                        </div>
                        <div class="home-hero__social">
                            <a href="#" class="home-hero__social-icon-link">
                                <img
                                    src="./assets/png/email.png"
                                    alt="icon"
                                    class="home-hero__social-icon"
                                />
                            </a>
                        </div>
                        <div class="home-hero__social">
                            <a href="#" class="home-hero__social-icon-link">
                                <img
                                    src="./assets/png/yt-ico.png"
                                    alt="icon"
                                    class="home-hero__social-icon"
                                />
                            </a>
                        </div>
                        <div class="home-hero__social">
                            <a
                                href="#"
                                class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
                            >
                                <img
                                    src="./assets/png/insta-ico.png"
                                    alt="icon"
                                    class="home-hero__social-icon"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="home-hero__mouse-scroll-cont">
                        <div className="mouse" style={{ fontSize: "2rem", paddingLeft: "4px" }}>&#8595;
                        </div>
                    </div>
                </section>

                <section id="about" className="about sec-pad">
                    <div className="main-container">
                        <h2 className="heading heading-sec heading-sec__mb-med">
                            <span className="heading-sec__main">About Me</span>
                            <span className="heading-sec__sub">
                                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                            </span>
                        </h2>
                        <div className="about__content">
                            <div className="about__content-main">
                                <h3 className="about__content-title">Get to know me!</h3>
                                <div className="about__content-details">
                                    <p className="about__content-details-para">
                                        Hello! I'm <strong>Ayush Kumar Singh</strong>, a passionate and dedicated <strong>Full-Stack Developer</strong> with a strong focus on building high-performance, scalable, and user-friendly <strong>web applications</strong>. I specialize in modern web development technologies including <strong>React, Next.js, Node.js with Express, MongoDB, and TypeScript</strong>, alongside a solid foundation in <strong>Java, JavaScript, and Python</strong>. My expertise allows me to create end-to-end solutions that are both efficient and maintainable.
                                        With a deep understanding of <strong>Data Structures and Algorithms</strong>, I am skilled at solving complex problems and optimizing applications for the best performance.

                                    </p>
                                    {/* <p className="about__content-details-para">
                    Over the years, I have worked on a variety of projects, including a <strong>Car Rental System</strong> and a <strong>Restaurant Management System</strong>, where I utilized my full-stack development skills. Whether it's creating responsive, dynamic user interfaces with <strong>React</strong> and <strong>Next.js</strong>, or building powerful back-end APIs using <strong>Node.js, Express</strong>, and <strong>MongoDB</strong>, I ensure a seamless integration between the front-end and back-end. I also leverage <strong>TypeScript</strong> for better code quality and scalability.
                  </p> */}
                                </div>
                                <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr" onClick={() => handleMenuLinkClick('contact')}>Contact</a>
                            </div>
                            <div className="about__content-skills">
                                <h3 className="about__content-title">My Skills</h3>
                                <div className="skills">
                                    <div className="skills__skill">HTML</div>
                                    <div className="skills__skill">CSS</div>
                                    <div className="skills__skill">Bootstrap</div>
                                    <div className="skills__skill">TalwindCss</div>
                                    <div className="skills__skill">JavaScript</div>
                                    <div className="skills__skill">TypeScript</div>
                                    <div className="skills__skill">React</div>
                                    <div className="skills__skill">Next Js</div>
                                    <div className="skills__skill">Node</div>
                                    <div className="skills__skill">Express</div>
                                    <div className="skills__skill">Mongodb</div>
                                    <div className="skills__skill">Java</div>
                                    <div className="skills__skill">Python</div>
                                    <div className="skills__skill">OOPS</div>
                                    <div className="skills__skill">Git</div>
                                    <div className="skills__skill">Github</div>
                                    <div className="skills__skill">Responsive Design</div>

                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                <section id="projects" class="projects sec-pad">
                    <Projects />
                </section>

                <section id="contact" class="contact sec-pad dynamicBg">
                    <div class="main-container">
                        <h2 class="heading heading-sec heading-sec__mb-med">
                            <span class="heading-sec__main heading-sec__main--lt">Contact</span>
                            <span class="heading-sec__sub heading-sec__sub--lt">
                                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                            </span>
                        </h2>
                        <div class="contact__form-container">
                            <form action="#" class="contact__form">
                                <div class="contact__form-field">
                                    <label class="contact__form-label" for="name">Name</label>
                                    <input
                                        required
                                        placeholder="Enter Your Name"
                                        type="text"
                                        class="contact__form-input"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div class="contact__form-field">
                                    <label class="contact__form-label" for="email">Email</label>
                                    <input
                                        required
                                        placeholder="Enter Your Email"
                                        type="text"
                                        class="contact__form-input"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <div class="contact__form-field">
                                    <label class="contact__form-label" for="message">Message</label>
                                    <textarea
                                        required
                                        cols="30"
                                        rows="10"
                                        class="contact__form-input"
                                        placeholder="Enter Your Message"
                                        name="message"
                                        id="message"
                                    ></textarea>
                                </div>
                                <button type="submit" class="btn btn--theme contact__btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                

            </body>
        </div>
    );
}

export default App;
