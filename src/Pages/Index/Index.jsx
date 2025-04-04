import React from "react";
import Nav from "../../Compoents/Nav/Nav";

import indexCSS from './../Index/Index.module.css'

import heroImg from './../../assets/hero-image.jpg'
import aboutimage from './../../assets/about-hero.png'

import frontend from './../../assets/Frontend.png'
import Backend from './../../assets/Backend.png'
import UiUxDesign from './../../assets/UiUx.png'

import { ReactTyped } from "react-typed";

import projectImg01 from './../../assets/portfolio-image-01.png'
import projectImg02 from './../../assets/portfolio-image-02.png'
import projectImg03 from './../../assets/portfolio-image-03.png'
import projectImg04 from './../../assets/portfolio-image-04.png'

function Index() {
    return (
        <div>
            {/* ----------------Header---------------- */}
            <div id="Home" className={indexCSS.headerWrapper}>

                <Nav />

                <div className={indexCSS.headerContainer}>
                    <div className={indexCSS.headerContent}>
                        <h5>Hello I m '</h5>
                        <h1>Landry </h1>
                        <p>A Passionate &nbsp;
                            <span>
                                <ReactTyped
                                    strings={['Web Designer', 'App Designer', 'UI / UX Designer']}
                                    typeSpeed={40}
                                    loop={true}
                                    backSpeed={40}
                                ></ReactTyped>
                            </span>
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus earum, qui minus fugit fugiat nisi.</p>

                        <div className={indexCSS.social}>
                            <i className="ri-facebook-line"></i>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-github-line"></i>
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima modi, nostrum fuga quaerat iure.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={Backend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Backend Developer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima modi, nostrum fuga quaerat iure.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={UiUxDesign} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>UI / UX Designer </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima modi, nostrum fuga quaerat iure.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illo temporibus delectus sed quas amet, distinctio suscipit porro dignissimos obcaecati at ratione ut ab omnis.</p>

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
                            <h3>Software Engineer Google</h3>
                            <p>Sept , 2022 Present </p>
                            <ul>
                                <li>Developed multiple features for Google's flagship product</li>
                                <li>Collaborated with cross-functional teams to design and implement new features</li>
                            </ul>
                        </div>
                        <div className={indexCSS.Experience_card}>
                            <h3>UI Designer , Microsoft</h3>
                            <p>Aug 2021  , Aug 2022  </p>
                            <ul>
                                <li>
                                    Designed and developed multiple UI components for Microsoft's flagship product
                                </li>
                                <li>
                                    Collaborated with cross-functional teams to design and implement new features
                                </li>
                            </ul>

                        </div>
                        <div className={indexCSS.Experience_card}>
                            <h3>UI Designer , Netflix</h3>
                            <p>Aug 2019  , Aug 2020  </p>
                            <ul>
                                <li>
                                    Designed and developed multiple UI components for Netflix's flagship product
                                </li>
                                <li>
                                    Collaborated with cross-functional teams to design and implement new features
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
                            <h3>Mobile App Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, incidunt?</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg02} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Software Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, incidunt?</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg03} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Website Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, incidunt?</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg04} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>eCommerce Website Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, incidunt?</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>

            </section>

            <section id="contact" className={indexCSS.contact_wrapper}>
                <h3 className="SectionTitle">Get in Touch</h3>

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
                            <span>+1 9632577412</span>
                        </div>
                        <div className={indexCSS.info_wrapper}>
                            <i className="ri-mail-line"></i>
                            <span>example@gmail.com</span>
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