import React, { useEffect, useRef } from 'react';
import './Skills.css';

// Skill logo mapping
const skillLogos = {
  // Languages
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",

  // Frameworks
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",

  // Databases
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  // Cloud Services
  AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  EC2: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
  Lambda: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
  S3: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
  Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",

  // Tools
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  Tableau: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg"
};

// An array of your skills, categorized for clarity
const skills = {
  languages: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS', 'Kotlin'],
  frameworks: ['React', 'Node.js', 'Flask'],
  databases: ['MySQL', 'MongoDB'],
  cloud: ['Azure', 'GCP', 'AWS', 'EC2', 'Lambda', 'S3'],
  tools: ['Power BI', 'Docker', 'Git', 'Jira']
};

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const skillCategories = document.querySelectorAll('.skills-category');
    skillCategories.forEach((cat) => observer.observe(cat));

    return () => {
      skillCategories.forEach((cat) => observer.unobserve(cat));
    };
  }, []);

  return (
    <section id="skills-section" className="skills-section" ref={skillsRef}>
      <h1 className="skills-title-bg">SKILLS</h1>
      <div className="skills-main-content">
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <p className="skills-subtitle">I CONSTANTLY TRY TO IMPROVE</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skills-category">
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div className="skill-pills">
                {skillList.map(skill => (
                  <div key={skill} className="skill-pill">
                    <img 
                      src={skillLogos[skill]} 
                      alt={`${skill} logo`} 
                      className="skill-logo"
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 