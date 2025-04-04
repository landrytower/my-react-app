import React from "react";
import Nav from "../../compoent/Nav/Nav";

import indexCSS from './../Index/Index.module.css'

import heroImg from './../../assets/ab.jpeg'
import aboutimage from './../../assets/ab2.jpeg'

import frontend from './../../assets/Frontend.png'
import Backend from './../../assets/Backend.png'
import UiUxDesign from './../../assets/UiUx.png'


import { LuUtensils } from "react-icons/lu";
import { GiVideoCamera } from "react-icons/gi";
import { SiAltiumdesigner } from "react-icons/si";


import { ReactTyped } from "react-typed";

import projectImg01 from './../../assets/portfolio-image-01.png'
import projectImg02 from './../../assets/portfolio-image-02.png'
import projectImg03 from './../../assets/portfolio-image-03.png'
import projectImg04 from './../../assets/portfolio-image-04.png'

import styles from './index.module.css';




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
        <p>A Passionate &nbsp;
            <span>
                <ReactTyped
                    strings={['Web Designer', 'App Designer', 'UI / UX Designer']}
                    typeSpeed={80}
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

                <h2 className="SectionTitle">About Me</h2>

                <div className={indexCSS.about}>
                    <div className={indexCSS.aboutImage}>
                        <img src={aboutimage} alt="" />
                    </div>
                    
                    <div className={indexCSS.aboutContent}>
                        <div className={indexCSS.aboutCard}>
                            <img src={frontend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Frontend Developer</h3>
                                <p>Crafting seamless user experiences with HTML, CSS, and JavaScript — where design meets functionality.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={Backend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Backend Developer</h3>
                                <p>Building secure and scalable systems with Django and Postgres — powering every click with performance.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={UiUxDesign} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>UI / UX Designer </h3>
                                <p>Designing intuitive interfaces that put people first — blending creativity with user-centered logic v.</p>
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
                        <p> I have experience working on both the frontend and backend of web applications, using tools like HTML5, CSS, JavaScript, Django, and Postgres. I focus on building responsive, user-friendly interfaces while also making sure the backend is secure and reliable. Through hands-on projects, I've developed a well-rounded skill set that combines design, functionality, and performance.
      </p>

      <div>
        {[
          { name: 'HTML', percent: '90%' },
          { name: 'CSS3', percent: '80%' },
          { name: 'JavaScript', percent: '75%' },
          { name: 'React Js', percent: '70%' },
          { name: 'Photoshop', percent: '75%' },
        ].map((skill, index) => (
          <div key={index} className={styles.Skill}>
            <h4>{skill.name}</h4>
            <div className={styles.SkillBar}>
              <div
                className={styles.SkillBarFill}
                style={{ width: skill.percent }}
              ></div>
              <div className={styles.percentLabel}>{skill.percent}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Experience Cards (underneath) */}
    <div className={indexCSS.Experience_wrapper}>
    <div className={indexCSS.Experience_card}>
  <h3>Server, Orchid Thai <LuUtensils /></h3>
  <p>May 2023 - August 2024</p>
  <ul>
    <li>
      - Took care of guests, handled orders smoothly, and kept things running even when it got busy.
    </li>
  </ul>
</div>
<div className={indexCSS.Experience_card}>
  <h3>Videographer, Bluefield State University <GiVideoCamera /></h3>
  <p>August 2021 – April 2023</p>
  <ul>
    <li>
      - Shot and edited live sports videos with a team, making sure everything looked good on stream.
    </li>
  </ul>
</div>
<div className={indexCSS.Experience_card}>
  <h3>UI Designer, Marietta College <SiAltiumdesigner /></h3>
  <p>August 2024 - May 2025</p>
  <ul>
    <li>
      - Helped design and build a clean, easy-to-use website for a local health department using HTML, CSS, and Django.
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
                            <h3>Landry Porfolio </h3>
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
                            <h3>Website Development</h3>
                            <p>Coming soon</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg04} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>eCommerce Website Development</h3>
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