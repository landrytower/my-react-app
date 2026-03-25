import React, { useEffect, useRef } from "react";
import Nav from "../../compoent/Nav/Nav";
import indexCSS from './../Index/Index.module.css';

import heroImg from './../../assets/ab.jpeg';
import aboutVideoMp4 from './../../assets/copy_E7FE5B14-08AF-4DAF-9C94-388E24DCB92A.mp4';

import frontend from './../../assets/Frontend.png';
import Backend from './../../assets/Backend.png';
import UiUxDesign from './../../assets/UiUx.png';

import projectImg02 from './../../assets/Dev 2.jpg';
import projectImg03 from './../../assets/APP.jpg';

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
  const hasAnimatedRef = useRef(false);
  
  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    
    const animateBars = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      
      el.setAttribute('data-revealed', 'true');
      
      // Find all skill bars with data-target
      const bars = el.querySelectorAll('[data-target]');
      
      bars.forEach(bar => {
        const target = parseInt(bar.getAttribute('data-target') || '0', 10);
        const percentEl = bar.querySelector('span');
        if (!percentEl) return;

        const duration = 2700; // 2.7 seconds
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.round(progress * target);
          percentEl.textContent = `${value}%`;
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      });
    };

    const resetBars = () => {
      hasAnimatedRef.current = false;
      el.setAttribute('data-revealed', 'false');
      const bars = el.querySelectorAll('[data-target]');
      bars.forEach(bar => {
        const percentEl = bar.querySelector('span');
        if (percentEl) percentEl.textContent = `0%`;
      });
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBars();
        } else {
          resetBars();
        }
      });
    }, { threshold: 0.1 }); // Lower threshold to trigger earlier

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // footer collapse state removed (toggle button removed)

  // Portfolio websites data
  const portfolioWebsites = [
    {
      id: 1,
      name: "Liprobakin",
      url: "https://liprobakin.com",
      description: "Professional business website with modern design",
      category: "Business",
      // Using a screenshot API service for thumbnail
      thumbnail: "https://api.microlink.io/?url=https://liprobakin.com&screenshot=true&meta=false&embed=screenshot.url"
    }
  ];

  // Floating particles animation ref
  const particlesRef = useRef(null);
  useEffect(() => {
    const el = particlesRef.current;
    if (!el) return;
    // Create floating particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = indexCSS.particle;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${8 + Math.random() * 8}s`;
      el.appendChild(particle);
    }
  }, []);

  return (
    <div className={indexCSS.pageWrapper}>
      {/* Floating Particles Background */}
      <div ref={particlesRef} className={indexCSS.particlesContainer}></div>
      
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
            <video autoPlay muted loop playsInline preload="metadata" aria-label="About me video">
              <source src={aboutVideoMp4} type="video/mp4" />
            </video>
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
            <div className={`${indexCSS.Experience_card} ${indexCSS.card_cloud}`}>
              <div className={indexCSS.cardIcon}><i className="ri-cloud-line"></i></div>
              <h3>Junior Cloud Engineer, CentralSquare Technologies</h3>
              <p className={indexCSS.cardDate}>August 2025 - Present</p>
              <ul>
                <li>- Designing secure, scalable RESTful APIs for VPN workflows.</li>
                <li>- Architecting cloud storage using Amazon S3, schema less and relational databases.</li>
                <li>- Building portal features like user access controls and role based permissions.</li>
                <li>- Developing with Visual Studio Code and ASP.NET, integrating CI/CD pipelines and unit testing frameworks.</li>
              </ul>
              <p className={indexCSS.cardSkills}><strong>Skills:</strong> ASP.NET · Amazon S3 · Microsoft Visual Studio Code</p>
            </div>
            <div className={`${indexCSS.Experience_card} ${indexCSS.card_video}`}>
              <div className={indexCSS.cardIcon}><GoDeviceCameraVideo /></div>
              {/* Camera frame overlay */}
              <div className={indexCSS.cameraFrame}></div>
              {/* Film strip animation */}
              <div className={indexCSS.filmStrip}></div>
              <h3>Videographer, Bluefield State University</h3>
              <p className={indexCSS.cardDate}>August 2021 – April 2023</p>
              <ul><li>-Shot and edited highlight videos and event promos for the athletics department and CIAA conference.</li></ul>
            </div>
            <div className={`${indexCSS.Experience_card} ${indexCSS.card_design}`}>
              <div className={indexCSS.cardIcon}><SiAltiumdesigner /></div>
              {/* UI Builder elements */}
              <div className={`${indexCSS.uiElement} ${indexCSS.uiElement1}`}></div>
              <div className={`${indexCSS.uiElement} ${indexCSS.uiElement2}`}></div>
              <div className={`${indexCSS.uiElement} ${indexCSS.uiElement3}`}></div>
              <div className={`${indexCSS.uiElement} ${indexCSS.uiElement4}`}></div>
              <div className={indexCSS.cursor}></div>
              <h3>UI Designer, Marietta College</h3>
              <p className={indexCSS.cardDate}>August 2024 - May 2025</p>
              <ul><li>-Designed a clean and user-friendly web interface for a Washington County government project as part of a senior capstone.</li></ul>
            </div>
          </div>
        </div>
      </section>

     
      <section id="Projects" className={indexCSS.projects_container}>
        <h2 className="SectionTitle">My Projects</h2>
        
        {/* Website Development Portfolio */}
        <div className={indexCSS.portfolioSection}>
          <h3 className={indexCSS.portfolioTitle}>
            <span className={indexCSS.titleIcon}>🌐</span>
            Website Development
          </h3>
          <p className={indexCSS.portfolioSubtitle}>Live websites I've built for clients</p>
          
          <div className={indexCSS.portfolioGrid}>
            {portfolioWebsites.map((site) => (
              <a 
                key={site.id} 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={indexCSS.portfolioCard}
              >
                <div className={indexCSS.browserFrame}>
                  <div className={indexCSS.browserBar}>
                    <span className={indexCSS.browserDot}></span>
                    <span className={indexCSS.browserDot}></span>
                    <span className={indexCSS.browserDot}></span>
                    <span className={indexCSS.browserUrl}>{site.url.replace('https://', '')}</span>
                  </div>
                  <div className={indexCSS.screenshotContainer}>
                    <img 
                      src={site.thumbnail} 
                      alt={`${site.name} website preview`}
                      loading="lazy"
                      className={indexCSS.screenshotImg}
                    />
                    <div className={indexCSS.screenshotOverlay}>
                      <span className={indexCSS.visitBtn}>Visit Site →</span>
                    </div>
                  </div>
                </div>
                <div className={indexCSS.portfolioInfo}>
                  <span className={indexCSS.portfolioCategory}>{site.category}</span>
                  <h4>{site.name}</h4>
                  <p>{site.description}</p>
                </div>
              </a>
            ))}
            
            {/* Coming Soon Placeholder */}
            <div className={indexCSS.comingSoonCard}>
              <div className={indexCSS.comingSoonIcon}>+</div>
              <h4>More Coming Soon</h4>
              <p>New projects in development</p>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className={indexCSS.otherProjects}>
          <div className={indexCSS.projects}>
            <div className={indexCSS.project}><img src={projectImg02} alt="" /><div className={indexCSS.project_content}><h3>Software Development</h3><p>Coming soon</p></div></div>
            <div className={indexCSS.project}><img src={projectImg03} alt="" /><div className={indexCSS.project_content}><h3>Mobile App Development</h3><p>Coming soon</p></div></div>
          </div>
        </div>
      </section>

      {/* --- SPOOKY CONTACT FORM --- */}
      <section id="contact" className={indexCSS.contact_wrapper}>
        <h3 className="SectionTitle">Summon Me</h3>
        
        <div className={indexCSS.contactContainer}>
          {/* Floating orbs */}
          <div className={indexCSS.orbFloat1}></div>
          <div className={indexCSS.orbFloat2}></div>
          <div className={indexCSS.orbFloat3}></div>
          
          {/* Mystical lines */}
          <div className={indexCSS.mysticLine1}></div>
          <div className={indexCSS.mysticLine2}></div>
          
          <div className={indexCSS.contactCard}>
            {/* Glowing border effect */}
            <div className={indexCSS.cardGlow}></div>
            
            <div className={indexCSS.contactHeader}>
              <h4>Get In Touch</h4>
              <p className={indexCSS.contactSubtitle}>Have a project in mind? Let's work together.</p>
            </div>
            
            <form onSubmit={sendEmail} className={indexCSS.contactForm}>
              <div className={indexCSS.inputRow}>
                <div className={indexCSS.inputGroup}>
                  <label>First Name</label>
                  <input type="text" name="first_name" required placeholder="John" />
                  <span className={indexCSS.inputLine}></span>
                </div>
                <div className={indexCSS.inputGroup}>
                  <label>Last Name</label>
                  <input type="text" name="last_name" required placeholder="Doe" />
                  <span className={indexCSS.inputLine}></span>
                </div>
              </div>
              
              <div className={indexCSS.inputRow}>
                <div className={indexCSS.inputGroup}>
                  <label>Email Address</label>
                  <input type="email" name="email" required placeholder="john@example.com" />
                  <span className={indexCSS.inputLine}></span>
                </div>
                <div className={indexCSS.inputGroup}>
                  <label>Phone (Optional)</label>
                  <input type="text" name="phone" placeholder="+1 (555) 000-0000" />
                  <span className={indexCSS.inputLine}></span>
                </div>
              </div>
              
              <div className={indexCSS.inputGroup + ' ' + indexCSS.textareaGroup}>
                <label>Your Message</label>
                <textarea name="message" required placeholder="Tell me about your project..." rows="5"></textarea>
                <span className={indexCSS.inputLine}></span>
              </div>
              
              <button type="submit" className={indexCSS.submitBtn}>
                <span className={indexCSS.btnText}>Send Message</span>
                <span className={indexCSS.btnIcon}>
                  <i className="ri-send-plane-fill"></i>
                </span>
              </button>
            </form>
          </div>
          
          {/* Map Section */}
          <div className={indexCSS.mapSection}>
            <div className={indexCSS.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.95855577!2d-81.5780483!3d28.4811165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1706140000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orlando, Florida Location"
              ></iframe>
              <div className={indexCSS.mapOverlay}></div>
            </div>
          </div>
          
          <div className={indexCSS.contactInfo}>
            <div className={indexCSS.infoCard}>
              <div className={indexCSS.infoIcon}>
                <i className="ri-map-pin-line"></i>
              </div>
              <div className={indexCSS.infoText}>
                <h5>Location</h5>
                <p>Orlando, Florida</p>
              </div>
            </div>
            
            <div className={indexCSS.infoCard}>
              <div className={indexCSS.infoIcon}>
                <i className="ri-phone-line"></i>
              </div>
              <div className={indexCSS.infoText}>
                <h5>Phone</h5>
                <p>+1 (205) 218-9027</p>
              </div>
            </div>
            
            <div className={indexCSS.infoCard}>
              <div className={indexCSS.infoIcon}>
                <i className="ri-mail-line"></i>
              </div>
              <div className={indexCSS.infoText}>
                <h5>Email</h5>
                <p>babulandry4@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className={indexCSS.socialLinks}>
            <a href="https://www.linkedin.com/in/landry-palata-3436a031a/" target="_blank" rel="noopener noreferrer" className={indexCSS.socialLink}>
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://www.instagram.com/landry_palata/" target="_blank" rel="noopener noreferrer" className={indexCSS.socialLink}>
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="mailto:babulandry4@gmail.com" className={indexCSS.socialLink}>
              <i className="ri-mail-fill"></i>
            </a>
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

