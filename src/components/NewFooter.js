import React from 'react';

const NewFooter = ({
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToWork,
  scrollToProjects,
  scrollToEducation
}) => {
  const handleLinkClick = (e, scrollTo) => {
    e.preventDefault();
    scrollTo();
  };

  return (
    <footer className="new-footer-container">
      <div className="footer-main-content">
        <div className="footer-left">
          <a href="#home-section" className="footer-logo">RS</a>
          <p className="footer-bio">
            I'm Rohit - a full-stack developer, & problem solver. Thanks for checking out my site!
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h4>General</h4>
            <ul>
              <li><a href="#home-section" onClick={(e) => handleLinkClick(e, scrollToHome)}>Home</a></li>
              <li><a href="#about-section" onClick={(e) => handleLinkClick(e, scrollToAbout)}>About</a></li>
              <li><a href="#skills-section" onClick={(e) => handleLinkClick(e, scrollToSkills)}>Skills</a></li>
              <li><a href="#experience-section" onClick={(e) => handleLinkClick(e, scrollToWork)}>Work</a></li>
              <li><a href="#projects-section" onClick={(e) => handleLinkClick(e, scrollToProjects)}>Projects</a></li>
              <li><a href="#education-section" onClick={(e) => handleLinkClick(e, scrollToEducation)}>Education</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Research Paper</h4>
            <ul>
              <li><a href="https://ieeexplore.ieee.org/abstract/document/10276249" target="_blank" rel="noopener noreferrer">Stroke Prediction</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>More</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/shettyrohit0810/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/shettyrohit0810" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.instagram.com/shettyrohit0810/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com/RohitSh93100109" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="mailto:shettyrohit0810@gmail.com">Gmail</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p className="footer-copyright">
          © 2025 Rohit Shetty
        </p>
        <div className="footer-socials">
           <a href="https://www.linkedin.com/in/shettyrohit0810/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/shettyrohit0810" target="_blank" rel="noopener noreferrer" className="github-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.instagram.com/shettyrohit0810/" target="_blank" rel="noopener noreferrer" className="instagram-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://x.com/RohitSh93100109" target="_blank" rel="noopener noreferrer" className="x-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </a>
          <a href="mailto:shettyrohit0810@gmail.com" target="_blank" rel="noopener noreferrer" className="gmail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter; 