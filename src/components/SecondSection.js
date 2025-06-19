import React from 'react';
import './SecondSection.css';
import RohitImage1 from '../Assets/Rohit-Image1.webp';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);


const SecondSection = () => {
  return (
    <section id="about-section" className="about-section-full">
      <h1 className="about-title-bg">ABOUT ME</h1>
      <div className="about-main-content">
        <div className="about-header">
          <h2>About Me</h2>
          <button className="more-about-btn">MORE ABOUT ME</button>
        </div>
        <div className="about-body">
          <div className="about-text-content">
            <h3>
              Hi there! I'm <span className="name-gradient">Rohit</span>
            </h3>
            <p>
              I'm a Master's student in Computer Science at the University of Southern California, specializing in AI and Web Technology. I'm passionate about building intelligent, scalable applications that solve real-world problems.
            </p>
            <p>
              With a foundation in full-stack development (React, Node.js) and hands-on experience with cloud platforms like AWS and GCP, I enjoy bringing ideas to life. My experience ranges from developing B2B payment solutions to constructing intelligent chatbots with Azure OpenAI.
            </p>
            <div className="social-icons">
              <a href="https://github.com/shettyrohit0810" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/shettyrohit0810" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="mailto:shettyrohit0810@gmail.com" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>
          <div className="about-image-container">
            <img src={RohitImage1} alt="Rohit Shetty" className="about-photo-large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection; 