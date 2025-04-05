import React from "react";
import Nav from "../../compoent/Nav/Nav";

import indexCSS from './../Index/Index.module.css'

import heroImg from './../../assets/ab.jpeg'
import aboutimage from './../../assets/ab2.jpeg'

import frontend from './../../assets/Frontend.png'
import Backend from './../../assets/Backend.png'
import UiUxDesign from './../../assets/UiUx.png'

import { ReactTyped } from "react-typed";

import projectImg01 from './../../assets/Dev 1.jpg'
import projectImg02 from './../../assets/Dev 2.jpg'
import projectImg03 from './../../assets/APP.jpg'
import projectImg04 from './../../assets/D3v3.jpg'

function Index() {
    return (
        <div>
            {/* ----------------Header---------------- */}
            <div id="Home" className={indexCSS.headerWrapper}>

                <Nav />

                <div className={indexCSS.headerContainer}>
                    <div className={indexCSS.headerContent}>
                        <h5>Hello I m '</h5>
                        <h1>Landry</h1>
                        <p>Your &nbsp;
                            <span>
                                <ReactTyped
                                    strings={['Web Designer', 'App Designer', 'UI / UX Designer']}
                                    typeSpeed={40}
                                    loop={true}
                                    backSpeed={40}
                                    ></ReactTyped>
                                </span>
                            </p>
                            <p>I am an Information Systems student with a focus on full-stack development, cloud technologies, and cybersecurity</p>
    
                            <div className={indexCSS.social}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-line"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-twitter-x-line"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/landry-palata-3436a031a/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-line"></i>
        </a>
    </div>
                        <button>CV <i className="ri-file-list-3-line"></i> </button>
                    </div>
                    <div className={indexCSS.headerImage}>
                        <img src={heroImg} alt="hero-image" />

                        <div className={indexCSS.borderAnimation}></div>
                    </div>
                </div>

            </div>

            <section id="about" className={`${indexCSS.about_wrapper}`}>

                <h2 className="SectionTitle">About Us</h2>

                <div className={indexCSS.about}>
                    <div className={indexCSS.aboutImage}>
                        <img src={aboutimage} alt="" />
                    </div>
                    <div className={indexCSS.aboutContent}>
                        <div className={indexCSS.aboutCard}>
                            <img src={frontend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Frontend Developer</h3>
                                <p>Crafting seamless user experiences with HTML, CSS, and JavaScript where design meets functionality.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={Backend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Backend Developer</h3>
                                <p>Building secure and scalable systems with Django and Postgres  powering every click with performance.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={UiUxDesign} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>UI / UX Designer </h3>
                                <p>Designing intuitive interfaces that put people first  blending creativity with user-centered logic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Experience" className={indexCSS.Experience_container}>
                <h2 className="SectionTitle">My Experience</h2>

                <div className={indexCSS.Experience}>
                    <div className={indexCSS.Skils_wrapper}>
                        <h3>My Skils</h3>
                        <p>I have experience working on both the frontend and backend of web applications, using tools like HTML5, CSS, JavaScript, Django, and Postgres. I focus on building responsive, user-friendly interfaces while also making sure the backend is secure and reliable. Through hands-on projects, I've developed a well-rounded skill set that combines design, functionality, and performance.</p>

                        <div className={indexCSS.Skils}>
                            <div className={indexCSS.Skill}>
                                <h4>HTML</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_HTML}`} data-value="60%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>CSS3</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_CSS}`} data-value="75%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>JavaScript</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_JS}`} data-value="58%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>React Js</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skils_REACTJS}`} data-value="50%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>Tailwind CSS</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_TAILWIND}`} data-value="65%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>Photoshop</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_PHOTOSHOP}`} data-value="75%"></div>
                            </div>
                        </div>

                    </div>
                    <div className={indexCSS.Experience_wrapper}>
                        <div className={indexCSS.Experience_card}>
                            <h3>Server, Orchid Thai</h3>
                            <p>May 2023 - August 2024 </p>
                            <ul>
                                <li>-Provided excellent customer service by managing food orders, resolving conflicts and multitasking in a fast-paced environment.</li>
                               </ul>
                        </div>
                        <div className={indexCSS.Experience_card}>
                            <h3>Videographer, Bluefield State University</h3>
                            <p>August 2021 – April 2023 </p>
                            <ul>
                                <li>
                                    -Designed and developed multiple UI components for Microsoft's flagship product
                                </li>
                                
                            </ul>

                        </div>
                        <div className={indexCSS.Experience_card}>
                        <h3>UI Designer, Marietta College </h3>
                        <p>August 2024 - May 2025</p>
                            <ul>
                                <li>
                                -Developed a responsive web interface for the  Washington County Department as a capstone project   
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Projects" className={indexCSS.projects_container}>
                <h2 className="SectionTitle">My Projects</h2>                

                <div className={indexCSS.projects}>
                    <div className={indexCSS.project}>
                        <img src={projectImg01} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Website Development</h3>
                            <p>Coming soon</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg02} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Software Development</h3>
                            <p>Coming soon</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg03} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Mobile App Development</h3>
                            <p>Coming soon</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg04} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Website Development</h3>
                            <p>Coming soon</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>

            </section>

            <section id="contact" className={indexCSS.contact_wrapper}>
                <h3 className="SectionTitle">Contact Me</h3>

                <div className={indexCSS.contact}>
                    <div className={indexCSS.contact_form}>
                        <h4>Send a Message</h4>

                        <div className={indexCSS.input_wrapper}>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>

                        <div className={indexCSS.input_wrapper}>
                            <input type="email" placeholder="Email " />
                            <input type="text" placeholder="Enter phone" />
                        </div>

                        <textarea placeholder="Message"></textarea>

                        <button>Submit</button>

                    </div>
                    <div className={indexCSS.contact_details}>
                    <h4>Contact Info</h4>

<div className={indexCSS.info_wrapper}>
    <i className="ri-phone-line"></i>
    <span>+1(205)218-9027</span>
</div>
<div className={indexCSS.info_wrapper}>
    <i className="ri-mail-line"></i>
    <span>babulandry4@gmail.com</span>
</div>
<div className={indexCSS.social}>
    <i className="ri-instagram-line"></i>
    <i className="ri-facebook-line"></i>
    <i className="ri-twitter-x-line"></i>
    <i className="ri-youtube-line"></i>

                        </div>

                    </div>
                </div>

            </section>


            <section className={indexCSS.footer}>
                <div className={indexCSS.footerLinks}>
                    <a href="#Home">Home</a>
                    <a href="#about">About</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <p>@copyright 2025 all rights reserved</p>
            </section>

        </div>
    )
}

export default Index