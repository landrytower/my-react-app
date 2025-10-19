import React, { useEffect, useRef } from "react";
import Nav from "../../compoent/Nav/Nav";
import indexCSS from './../Index/Index.module.css';

import heroImg from './../../assets/ab.jpeg';
import aboutimage from './../../assets/ab2.jpeg';

import frontend from './../../assets/Frontend.png';
import Backend from './../../assets/Backend.png';
import UiUxDesign from './../../assets/UiUx.png';


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

  // animate skill badges when they scroll into view
  const badgesRef = useRef(null);
  useEffect(() => {
    const el = badgesRef.current;
    if (!el) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // reveal when entering
          el.classList.add(indexCSS.revealed);
          el.setAttribute('data-revealed', 'true');
        } else {
          // hide when leaving so animation can replay next time
          el.classList.remove(indexCSS.revealed);
          el.setAttribute('data-revealed', 'false');
        }
      });
    }, { threshold: 0.25 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // animate skill progress bars when they scroll into view
  const skillsRef = useRef(null);
  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.setAttribute('data-revealed', 'true');
          // animate numeric percentages for each bar
          const bars = el.querySelectorAll(`.${indexCSS.SkillBar}`);
          bars.forEach(bar => {
            const target = parseInt(bar.getAttribute('data-target') || '0', 10);
            const percentEl = bar.querySelector(`.${indexCSS.SkillPercent}`);
            if (!percentEl) return;

            // duration should match the CSS transition (900ms) scaled by 3x slower we've set earlier
            const duration = 900 * 3; // 2700ms
            const start = performance.now();

            const frame = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const value = Math.round(t * target);
              percentEl.textContent = `${value}%`;
              if (t < 1) requestAnimationFrame(frame);
            };
            requestAnimationFrame(frame);
          });
        } else {
          el.setAttribute('data-revealed', 'false');
          // reset numeric displays to 0 when leaving
          const bars = el.querySelectorAll(`.${indexCSS.SkillBar}`);
          bars.forEach(bar => {
            const percentEl = bar.querySelector(`.${indexCSS.SkillPercent}`);
            if (percentEl) percentEl.textContent = `0%`;
          });
        }
      });
    }, { threshold: 0.25 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // footer collapse state removed (toggle button removed)

  return (
    <div>
      <div id="Home" className={indexCSS.headerWrapper}>
        <Nav />

        <div className={indexCSS.headerContainer}>
          <div className={indexCSS.heroGrid}>
            <div className={indexCSS.heroLeft}>
              <div className={indexCSS.heroIntro}>
                <div className={indexCSS.kicker}>Hey I'm</div>
                <h1 className={indexCSS.heroTitle}>Landry <span className={indexCSS.heroAccent}>Palata</span></h1>
                <p className={indexCSS.heroTagline}><strong>UI/UX Designer</strong> &amp; <strong>Cloud Architect</strong></p>

                <p className={indexCSS.heroPunch}>
                  I design thoughtful user experiences and build resilient cloud platforms. I split my time between prototyping and testing interfaces that people love, and architecting backend systems that scale from API design and S3 backed storage to automated CI/CD pipelines.
                  I instrument and monitor systems with Datadog.
                </p>

                <div className={indexCSS.heroCTAs}>
                  <a href="#Projects" className={indexCSS.btnPrimary}>See my work</a>
                </div>
              </div>
            </div>

            <div className={indexCSS.heroRight}>
              <div className={indexCSS.heroCard}>
                <div className={indexCSS.accentBlob}></div>
                <img src={heroImg} alt="Landry portrait" className={indexCSS.portrait} />

                <div ref={badgesRef} className={indexCSS.skillBadges}>
                  <span className={`${indexCSS.badge} ${indexCSS.badge1}`}>React</span>
                  <span className={`${indexCSS.badge} ${indexCSS.badge2}`}>Angular</span>
                  <span className={`${indexCSS.badge} ${indexCSS.badge3}`}>Html</span>
                  <span className={`${indexCSS.badge} ${indexCSS.badge4}`}>Node</span>
                  <span className={`${indexCSS.badge} ${indexCSS.badge5}`}>Javascript</span>
                  <span className={`${indexCSS.badge} ${indexCSS.badge6}`}>DataDog</span>
                  <span className={`${indexCSS.badge} ${indexCSS.badge7}`}>AWS</span>
                  <span className={`${indexCSS.badge} ${indexCSS.badge8}`}>Grafana</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* social icons placed directly under headerContainer */}
        <div className={indexCSS.socialVertical}>
          <a href="https://www.linkedin.com/in/landry-palata-3436a031a/" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
          <a href="https://www.instagram.com/landry_palata/" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line"></i></a>
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
            <h3>My Skils</h3>
            <p>I’ve worked across both the frontend and backend, using tools like HTML, CSS, JavaScript, React, and Tailwind to build clean, responsive interfaces. On the backend side, I’ve built with Django and worked with databases like PostgreSQL. I'm also comfortable jumping into UI/UX design and editing with Photoshop when needed. I enjoy turning ideas into functional, user-friendly websites that look good and work well.</p>
            <div ref={skillsRef} className={indexCSS.Skils}>
              <div className={indexCSS.Skill}>
                <h4>HTML</h4>
                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_HTML}`} data-target="60">
                  <span className={indexCSS.SkillPercent}>0%</span>
                </div>
              </div>

              <div className={indexCSS.Skill}>
                <h4>Angular</h4>
                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_CSS}`} data-target="75">
                  <span className={indexCSS.SkillPercent}>0%</span>
                </div>
              </div>

              <div className={indexCSS.Skill}>
                <h4>JavaScript</h4>
                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_JS}`} data-target="58">
                  <span className={indexCSS.SkillPercent}>0%</span>
                </div>
              </div>

              <div className={indexCSS.Skill}>
                <h4>React Js</h4>
                <div className={`${indexCSS.SkillBar} ${indexCSS.Skils_REACTJS}`} data-target="50">
                  <span className={indexCSS.SkillPercent}>0%</span>
                </div>
              </div>

              <div className={indexCSS.Skill}>
                <h4>Amazon AWS</h4>
                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_TAILWIND}`} data-target="65">
                  <span className={indexCSS.SkillPercent}>0%</span>
                </div>
              </div>

              <div className={indexCSS.Skill}>
                <h4>DataDog</h4>
                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_PHOTOSHOP}`} data-target="75">
                  <span className={indexCSS.SkillPercent}>0%</span>
                </div>
              </div>
            </div>
          </div>

          <div className={indexCSS.Experience_wrapper}>
            <div className={indexCSS.Experience_card}>
              <h3>Junior Cloud Engineer, CentralSquare Technologies</h3>
              <p>August 2025 - Present</p>
              <ul>
                <li>- Designing secure, scalable RESTful APIs for VPN workflows.</li>
                <li>- Architecting cloud storage using Amazon S3, schema less and relational databases.</li>
                <li>- Building portal features like user access controls and role based permissions.</li>
                <li>- Developing with Visual Studio Code and ASP.NET, integrating CI/CD pipelines and unit testing frameworks.</li>
              </ul>
              <p><strong>Skills:</strong> ASP.NET · Amazon S3 · Microsoft Visual Studio Code</p>
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
        <h3 className="SectionTitle">Contact Me</h3>
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

        <div id="footer-links" className={indexCSS.footerLinks}>
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

