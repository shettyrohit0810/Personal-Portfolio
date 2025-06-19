import React, { useEffect, useState, useRef } from 'react';
import RohitImage from './Assets/Rohit-Image.webp';
import BackgroundMusic from './Assets/music.mp3';
import ResumePDF from './Assets/Rohit_Ramesh_Shetty_Resume.pdf';
import './App.css';
import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  RectangleStackIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import EclipseEffect from './components/EclipseEffect';
import ParticlesBackground from './components/ParticlesBackground';
import ContactModal from './components/ContactModal';
import SecondSection from './components/SecondSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import NewFooter from './components/NewFooter';
import Toast from './components/Toast';

function App() {
  const name = 'ROHIT SHETTY';
  const [showCurtain, setShowCurtain] = useState(true);
  const [curtainHide, setCurtainHide] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastExiting, setToastExiting] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [modalExiting, setModalExiting] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMuted, setIsMuted] = useState(true);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const audioRef = useRef(null);

  // Timing constants
  const startDelay = 400; // ms before letters animate
  const waveDuration = name.length * 80 + 350; // ms for all letters to finish animating
  const curtainDelay = 600; // ms after letters before curtain falls

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('shettyrohit0810@gmail.com');
    setEmailCopied(true);
    setShowToast(true);
    setToastExiting(false);

    setTimeout(() => setEmailCopied(false), 8000);

    setTimeout(() => {
      setToastExiting(true);
      setTimeout(() => {
        setShowToast(false);
      }, 400);
    }, 10000);
  };

  const openContactModal = () => {
    setModalExiting(false);
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setModalExiting(true);
    setTimeout(() => {
      setShowContactModal(false);
    }, 400); // Match animation duration
  };

  const handleShowMoreCertificates = () => {
    setShowAllCertificates(true);
  };

  const handleMusicIconClick = () => {
    setIsMuted((prev) => {
      const newMuted = !prev;
      if (!newMuted && audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      return newMuted;
    });
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink('home');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink('about');
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink('skills');
  };

  const scrollToWork = () => {
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink('work');
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink('projects');
  };

  const scrollToEducation = () => {
    const educationSection = document.getElementById('education-section');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink('education');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'home-section') {
              setActiveLink('home');
            } else if (entry.target.id === 'about-section') {
              setActiveLink('about');
            } else if (entry.target.id === 'skills-section') {
              setActiveLink('skills');
            } else if (entry.target.id === 'experience-section') {
              setActiveLink('work');
            } else if (entry.target.id === 'projects-section') {
              setActiveLink('projects');
            } else if (entry.target.id === 'education-section') {
              setActiveLink('education');
            }
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const skillsSection = document.getElementById('skills-section');
    const experienceSection = document.getElementById('experience-section');
    const projectsSection = document.getElementById('projects-section');
    const educationSection = document.getElementById('education-section');

    if (homeSection) observer.observe(homeSection);
    if (aboutSection) observer.observe(aboutSection);
    if (skillsSection) observer.observe(skillsSection);
    if (experienceSection) observer.observe(experienceSection);
    if (projectsSection) observer.observe(projectsSection);
    if (educationSection) observer.observe(educationSection);

    // Remove the scroll event listener since we now observe the projects section directly
    
    return () => {
      if (homeSection) observer.unobserve(homeSection);
      if (aboutSection) observer.unobserve(aboutSection);
      if (skillsSection) observer.unobserve(skillsSection);
      if (experienceSection) observer.unobserve(experienceSection);
      if (projectsSection) observer.unobserve(projectsSection);
      if (educationSection) observer.unobserve(educationSection);
    };
  }, []);

  useEffect(() => {
    // Start curtain animation after all letters are done
    const totalCurtainTime = startDelay + waveDuration + curtainDelay;
    const timer = setTimeout(() => {
      setCurtainHide(true);
      setTimeout(() => setShowCurtain(false), 1200); // matches curtain transition
    }, totalCurtainTime);
    return () => clearTimeout(timer);
  }, [waveDuration]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set low volume by default
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {}); // Play on unmute, catch autoplay errors
      }
    }
  }, [isMuted]);

  return (
    <>
      <nav className="main-navbar">
        <div className="navbar-center">
          <span className="navbar-logo">RS</span>
          <div className="navbar-links-absolute-center">
            <div className="navbar-links-wrapper">
              <ul className="navbar-links">
                <li className={activeLink === 'home' ? 'active' : ''} onClick={scrollToHome}>
                  <HomeIcon className="navbar-icon" />
                  <span className="navbar-text">Home</span>
                </li>
                <li className={activeLink === 'about' ? 'active' : ''} onClick={scrollToAbout}>
                  <UserIcon className="navbar-icon" />
                  <span className="navbar-text">About</span>
                </li>
                <li className={activeLink === 'skills' ? 'active' : ''} onClick={scrollToSkills}>
                  <WrenchScrewdriverIcon className="navbar-icon" />
                  <span className="navbar-text">Skills</span>
                </li>
                <li className={activeLink === 'work' ? 'active' : ''} onClick={scrollToWork}>
                  <BriefcaseIcon className="navbar-icon" />
                  <span className="navbar-text">Work</span>
                </li>
                <li className={activeLink === 'projects' ? 'active' : ''} onClick={scrollToProjects}>
                  <RectangleStackIcon className="navbar-icon" />
                  <span className="navbar-text">Projects</span>
                </li>
                <li className={activeLink === 'education' ? 'active' : ''} onClick={scrollToEducation}>
                  <AcademicCapIcon className="navbar-icon" />
                  <span className="navbar-text">Education</span>
                </li>
              </ul>
              <button
                onClick={openContactModal}
                data-slot="button"
                className="navbar-cta-btn items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs has-[>svg]:px-3 relative inline-block h-full cursor-pointer rounded-full bg-black/20 px-4 py-1.5 text-sm font-light whitespace-nowrap text-black transition-all duration-300 hover:bg-black/15 hover:text-black/85 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white/90"
              >
                Get in Touch
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-black opacity-30 blur-sm dark:bg-white"
                ></div>
              </button>
            </div>
          </div>
          <audio
            ref={audioRef}
            src={BackgroundMusic}
            loop
            style={{ display: 'none' }}
          />
          <span className="navbar-music-icon" onClick={handleMusicIconClick}>
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="1" x2="1" y2="23"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            )}
          </span>
        </div>
      </nav>
      <div id="home-section" className="main-hero-bg">
        <ParticlesBackground />
        <EclipseEffect />
        <section className="hero-content">
          <a
            href="#projects-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}
            className="announcement-bar group flex cursor-pointer items-center rounded-full border border-black/5 bg-neutral-200 text-sm text-white backdrop-blur-xs transition-transform duration-300 ease-in lg:text-base dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 animate-fadeInDown"
            style={{ marginBottom: '24px', marginTop: '37px', textDecoration: 'none' }}
          >
            <span className="mx-1 rounded-full bg-blue-700 px-1.5 text-xs leading-relaxed" style={{ color: '#fff', fontWeight: 600 }}>New</span>
            <div className="shiny-text px-1 py-0.5 hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-400" style={{ animationDuration: '4s', color: '#fff', fontWeight: 400 }}>
              My latest projects are taking shape!
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right mr-1 size-4 text-neutral-100/70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hover:duration-300" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
          </a>
          <h1 className="hero-title font-cocomat">
            I bring concepts to life<br />
            as an <span className="font-grandcru"><span className="font-nyght bg-linear-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide text-transparent">enthusiastic Software Engineer.</span></span>
          </h1>
          <div className="hero-sub font-clarika">
            Hello, I'm Rohit Shetty
            <div className="group relative z-300">
              <div className="mx-4 w-20 cursor-pointer overflow-hidden rounded-3xl md:w-24 lg:mx-3">
                <img src={RohitImage} alt="Rohit Shetty" className="rohit-photo" draggable="false" loading="lazy" />
              </div>
              <svg aria-hidden="true" className="group-hover:animate-wave pointer-events-none absolute bottom-0 left-0 hidden size-6 animate-none delay-200 group-hover:block" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path d="m4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72-1.328 12.875-11.083-4.042-9.667-14.333c-.793-1.129-.519-2.686.611-3.478z" fill="#ef9645"></path>
                <path d="m2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894l-7.288-10.627s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622l-7.947-11.591s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498l-7.428-10.832s-1.131-1.649.518-2.78 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903l-1.459-7.302s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11z" fill="#ffdc5d"></path>
                <g fill="#5dadec">
                  <path d="m12 32.042c-4 0-8.042-4.042-8.042-8.042 0-.553-.405-1-.958-1s-1.042.447-1.042 1c0 6 4.042 10.042 10.042 10.042.553 0 1-.489 1-1.042s-.447-.958-1-.958z"></path>
                  <path d="m7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zm17-32c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"></path>
                  <path d="m29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1c0-3.837-2.958-6.958-6.958-6.958z"></path>
                </g>
              </svg>
            </div>
            — a Full Stack Developer and AI enthusiast
          </div>
          <div className="hero-actions">
            <button onClick={openContactModal} className="group relative inline-flex items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/85 backdrop-blur-sm transition-all duration-300 hover:bg-transparent">
              <span className="z-10 px-3">Let's Connect</span>
              <div className="absolute inset-0 -z-10 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></div>
              <div className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-arrow-right size-[18px] text-black transition-all duration-300 group-hover:translate-x-[20px] group-hover:opacity-0">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-arrow-right absolute left-0 -z-10 size-[18px] translate-x-[-20px] text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </button>
            <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="download-cv-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              View my CV
            </a>
            {emailCopied ? (
              <span className="copied-message flex items-center gap-2 py-3 text-base font-light text-white/75">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 17l4 4L17 9"/><path d="M9 17l4 4L23 9"/></svg>
                Copied to clipboard
              </span>
            ) : (
              <button
                type="button"
                className="flex items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90"
                onClick={handleEmailCopy}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy" aria-hidden="true">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                shettyrohit0810@gmail.com
              </button>
            )}
          </div>
        </section>
      </div>
      <SecondSection />
      <div id="skills-section">
        <Skills />
      </div>
      <Experience />
      <div id="projects-section" style={{ 
        backgroundColor: "#0A090B", 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "100px 20px 80px 20px",
        position: "relative",
        textAlign: "center"
      }}>
        <h2 className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 pb-1 mb-2" style={{ paddingBottom: '0.5rem' }}>
          Projects
        </h2>
        <button className="more-about-btn" style={{ marginBottom: '24px' }}>CURATED WORK</button>
        <Projects showMore={showMoreProjects} />
        {!showMoreProjects && (
          <button className="see-more-projects-btn" onClick={() => setShowMoreProjects(true)}>
            See more projects
            <span className="arrow-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </button>
        )}
      </div>
      <div id="education-section">
        <Education 
          showAllCertificates={showAllCertificates}
          onShowMoreCertificates={handleShowMoreCertificates}
        />
      </div>
      <Footer onGetInTouchClick={openContactModal} />
      <NewFooter 
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToSkills={scrollToSkills}
        scrollToWork={scrollToWork}
        scrollToProjects={scrollToProjects}
        scrollToEducation={scrollToEducation}
      />
      {showCurtain && (
        <div className={`curtain ${curtainHide ? 'hide' : ''}`}>
          <h1 className="landing-name">
            {name.split('').map((char, idx) => (
              <span
                key={idx}
                className="letter"
                style={{ animationDelay: `${startDelay / 1000 + idx * 0.08}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>
      )}
      <Toast 
        show={showToast}
        exiting={toastExiting}
      />
      {showContactModal && (
        <ContactModal
          isOpen={showContactModal}
          onClose={closeContactModal}
          isExiting={modalExiting}
        />
      )}
    </>
  );
}

export default App;