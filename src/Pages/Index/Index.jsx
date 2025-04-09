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


import img1 from './../../assets/fr.jpeg'
import img2 from './../../assets/so.jpeg'
import img3 from './../../assets/jr.jpeg'
import img4 from './../../assets/sr.jpeg'

import NavigationButtons from './../../components/ui/button'

import { IoIosRestaurant } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { SiAltiumdesigner } from "react-icons/si";
import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"




function Index() {
    return (
        <div>
           
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
                                <p>Crafting seamless user experiences with HTML, CSS, JavaScript and React where design meets functionality.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={Backend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Backend Developer</h3>
                                <p>Building secure and scalable systems with Django and Postgres and Firebase  powering every click with performance.</p>
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
                            <h3>Server, Orchid Thai<IoIosRestaurant /></h3>
                            <p>May 2023 - August 2024 </p>
                            <ul>
                                <li>-Provided excellent customer service by managing food orders, resolving conflicts and multitasking in a fast-paced environment.</li>
                               </ul>
                        </div>
                        <div className={indexCSS.Experience_card}>
                            <h3>Videographer, Bluefield State University <GoDeviceCameraVideo /></h3>
                            <p>August 2021 – April 2023 </p>
                            <ul>
                                <li>
                                    -Shot and edited game highlights and promo videos for Bluefield State University athletics, working with the CIAA to showcase events.
                                </li>
                                
                            </ul>

                        </div>
                        <div className={indexCSS.Experience_card}>
                        <h3>UI Designer, Marietta College <SiAltiumdesigner /> </h3>
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

            <section className={indexCSS.carousel_section}>
            <h2 className="SectionTitle">Basketball career</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
  <CarouselContent>
    
    {[img1, img2, img3, img4].map((img, index) => (
      <CarouselItem key={index} className="flex justify-center">
        <Card className="w-full relative overflow-hidden">
          <CardContent className="p-2 relative aspect-square">
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="rounded-xl w-full h-full object-cover"
            />

            {index === 0 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-8 py-5 rounded-2xl shadow-2xl text-center w-[90%]">
                <p className="text-2xl font-bold mb-2">Freshman Year 6'7</p>
                <p className="text-lg font-medium">9.8 PPG | 6.2 RPG | 50 BLK</p>
                <p className="text-lg italic">27 PTS (season high)</p>
              </div>
            )}

            {index === 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-8 py-5 rounded-2xl shadow-2xl text-center w-[90%]">
                <p className="text-2xl font-bold mb-2">Sophomore Year 6'8</p>
                <p className="text-lg font-medium">10.0 PPG | 5.4 RPG | 2.4 BPG</p>
                <p className="text-lg italic">22 PTS (season high)</p>
              </div>
            )}

            {index === 2 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-8 py-5 rounded-2xl shadow-2xl text-center w-[90%]">
                <p className="text-2xl font-bold mb-2">Junior Year 6'8</p>
                <p className="text-lg font-medium">2.5 PPG | 2.6 RPG | 0.7 BPG</p>
                <p className="text-lg italic">9 PTS (season high)</p>
              </div>
            )}

            {index === 3 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-8 py-5 rounded-2xl shadow-2xl text-center w-[90%]">
                <p className="text-2xl font-bold mb-2">Senior Year 6'9</p>
                <p className="text-lg font-medium">5.3 PPG | 3.7 RPG | 1.3 BPG</p>
              </div>
            )}
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>


</section>






    













            <section id="contact" className={indexCSS.contact_wrapper}>
                <h3 className="SectionTitle">Hire Me</h3>

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