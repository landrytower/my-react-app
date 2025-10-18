import React from "react";
import Nav from "../../compoent/Nav/Nav";
import indexCSS from './../Index/Index.module.css';

import heroImg from './../../assets/ab.jpeg';
import aboutimage from './../../assets/ab2.jpeg';

import frontend from './../../assets/Frontend.png';
import Backend from './../../assets/Backend.png';
import UiUxDesign from './../../assets/UiUx.png';

import { ReactTyped } from "react-typed";

import projectImg01 from './../../assets/Dev 1.jpg';
import projectImg02 from './../../assets/Dev 2.jpg';
import projectImg03 from './../../assets/APP.jpg';
import projectImg04 from './../../assets/D3v3.jpg';

import { IoIosRestaurant } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { SiAltiumdesigner } from "react-icons/si";

import emailjs from 'emailjs-com';

function Index() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fya6y3f', // ✅ Service ID
      'template_54fw998', // ✅ Template ID
      e.target,
      'yPzNpFx1k-707cE92' // ✅ Public Key
    ).then(() => {
      alert("✅ Message sent successfully!");
      e.target.reset();
    }).catch((error) => {
      alert("❌ Failed to send message. Check console.");
      console.error("EmailJS error:", error);
    });
  };

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
                  typeSpeed={80}
                  loop={true}
                  backSpeed={80}
                />
              </span>
            </p>
            <p>I am an Information Systems student with a focus on full-stack development, cloud technologies, and cybersecurity</p>

            <div className={indexCSS.social}>
             {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-x-line"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="ri-github-line"></i></a> */}
              <a href="https://www.linkedin.com/in/landry-palata-3436a031a/" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
            </div>

            <button>CV <i className="ri-file-list-3-line"></i> </button>
          </div>

          <div className={indexCSS.headerImage}>
            <img src={heroImg} alt="hero" />
            <div className={indexCSS.borderAnimation}></div>
          </div>
        </div>
      </div>

      {/* --- ABOUT --- */}
      <section id="about" className={indexCSS.about_wrapper}>
        <h2 className="SectionTitle">About Me</h2>
        <div className={indexCSS.about}>
          <div className={indexCSS.aboutImage}>
            <img src={aboutimage} alt="about" />
          </div>
          <div className={indexCSS.aboutContent}>
            <div className={indexCSS.aboutCard}>
              <img src={frontend} alt="frontend" />
              <div className={indexCSS.aboutCardContent}>
                <h3>Frontend Developer</h3>
                <p>Crafting seamless user experiences with HTML, CSS, JavaScript and React where design meets functionality.</p>
              </div>
            </div>
            <div className={indexCSS.aboutCard}>
              <img src={Backend} alt="backend" />
              <div className={indexCSS.aboutCardContent}>
                <h3>Backend Developer</h3>
                <p>Building secure, scalable backends with Django, C#, PostgreSQL, Firebase, and Amazon AWS delivering fast, reliable performance behind every interaction.</p>
              </div>
            </div>
            <div className={indexCSS.aboutCard}>
              <img src={UiUxDesign} alt="uiux" />
              <div className={indexCSS.aboutCardContent}>
                <h3>UI / UX Designer</h3>
                <p>Designing intuitive interfaces that put people first blending creativity with user-centered logic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="Experience" className={indexCSS.Experience_container}>
        <h2 className="SectionTitle">My Experiencess</h2>
        <div className={indexCSS.Experience}>
          <div className={indexCSS.Skils_wrapper}>
            <h3>My Skills</h3>
            <p>I’ve worked across both the frontend and backend, using tools like HTML, CSS, JavaScript, React, and Tailwind to build clean, responsive interfaces. On the backend side, I’ve built with Django and worked with databases like PostgreSQL. I'm also comfortable jumping into UI/UX design and editing with Photoshop when needed. I enjoy turning ideas into functional, user-friendly websites that look good and work well.</p>
            <div className={indexCSS.Skils}>
              <div className={indexCSS.Skill}><h4>HTML</h4><div className={`${indexCSS.SkillBar} ${indexCSS.Skill_HTML}`}></div></div>
              <div className={indexCSS.Skill}><h4>CSS3</h4><div className={`${indexCSS.SkillBar} ${indexCSS.Skill_CSS}`}></div></div>
              <div className={indexCSS.Skill}><h4>JavaScript</h4><div className={`${indexCSS.SkillBar} ${indexCSS.Skill_JS}`}></div></div>
              <div className={indexCSS.Skill}><h4>React Js</h4><div className={`${indexCSS.SkillBar} ${indexCSS.Skils_REACTJS}`}></div></div>
              <div className={indexCSS.Skill}><h4>Amazon AWS</h4><div className={`${indexCSS.SkillBar} ${indexCSS.Skill_TAILWIND}`}></div></div>
              <div className={indexCSS.Skill}><h4>C#</h4><div className={`${indexCSS.SkillBar} ${indexCSS.Skill_PHOTOSHOP}`}></div></div>
            </div>
          </div>

          <div className={indexCSS.Experience_wrapper}>
            <div className={indexCSS.Experience_card}>
              <h3>Server, Orchid Thai<IoIosRestaurant /></h3>
              <p>May 2023 - August 2024</p>
              <ul><li>- Delivered a great dining experience by handling orders, answering questions, and keeping things smooth even on busy nights.</li></ul>
            </div>
            <div className={indexCSS.Experience_card}>
              <h3>Videographer, Bluefield State University <GoDeviceCameraVideo /></h3>
              <p>August 2021 – April 2023</p>
              <ul><li>-Shot and edited highlight videos and event promos for the athletics department and CIAA conference.</li></ul>
            </div>
            <div className={indexCSS.Experience_card}>
              <h3>UI Designer, Marietta College <SiAltiumdesigner /></h3>
              <p>August 2024 - May 2025</p>
              <ul><li>-Designed a clean and user-friendly web interface for a Washington County government project as part of a senior capstone.</li></ul>
            </div>
          </div>
        </div>
      </section>

     
      <section id="Projects" className={indexCSS.projects_container}>
        <h2 className="SectionTitle">My Projects</h2>
        <div className={indexCSS.projects}>
          <div className={indexCSS.project}><img src={projectImg01} alt="" /><div className={indexCSS.project_content}><h3>Website Development</h3><p>Coming soon, CATNETWORK</p></div></div>
          <div className={indexCSS.project}><img src={projectImg02} alt="" /><div className={indexCSS.project_content}><h3>Software Development</h3><p>Coming soon</p></div></div>
          <div className={indexCSS.project}><img src={projectImg03} alt="" /><div className={indexCSS.project_content}><h3>Mobile App Development</h3><p>Coming soon</p></div></div>
          <div className={indexCSS.project}><img src={projectImg04} alt="" /><div className={indexCSS.project_content}><h3>Website Development</h3><p>Coming soon</p></div></div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className={indexCSS.contact_wrapper}>
        <h3 className="SectionTitle">Hire Me</h3>
        <div className={indexCSS.contact}>
          <div className={indexCSS.contact_form}>
            <h4>Send a Message</h4>
            <form onSubmit={sendEmail}>
              <div className={indexCSS.input_wrapper}>
                <input type="text" name="first_name" placeholder="First Name" required />
                <input type="text" name="last_name" placeholder="Last Name" required />
              </div>
              <div className={indexCSS.input_wrapper}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="phone" placeholder="Enter phone" />
              </div>
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className={indexCSS.contact_details}>
            <h4>Contact Info</h4>
            <div className={indexCSS.info_wrapper}><i className="ri-phone-line"></i><span>+1(205)218-9027</span></div>
            <div className={indexCSS.info_wrapper}><i className="ri-mail-line"></i><span>babulandry4@gmail.com</span></div>
            <div className={indexCSS.social}>
             {/* <i className="ri-instagram-line"></i>
              <i className="ri-facebook-line"></i>
              <i className="ri-twitter-x-line"></i>
              <i className="ri-youtube-line"></i> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
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
  );
}

export default Index;
