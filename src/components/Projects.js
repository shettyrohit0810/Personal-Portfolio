import React from 'react';
import './Projects.css';
import Project1 from '../Assets/Project1.webp';
import Project2 from '../Assets/Project2.webp';
import Project3 from '../Assets/Project3.webp';
import Project4 from '../Assets/Project4.webp';
import Project5 from '../Assets/Project5.webp';
import GithubIcon from '../Assets/Github.svg';
import ExternalLinkIcon from '../Assets/external-link.svg';

const Projects = ({ showMore }) => {
  const projects = [
    {
      id: 1,
      title: "ATS Tracking System",
      image: Project1,
      description: "An intelligent ATS checker that evaluates resumes against job descriptions, providing a match percentage and identifying missing keywords.",
      tags: ["React", "JavaScript", "Python", "Flask", "scikit-learn", "NLP"],
      github: "https://github.com/shettyrohit0810/ATS-Resume-Evaluator",
      color: "#0EDA7D"
    },
    {
      id: 2,
      title: "Melody Generation",
      image: Project2,
      description: "Built a Recurrent Neural Network (RNN) with Long Short-Term Memory (LSTM) achieving 92% accuracy and 24% loss.",
      tags: ["Python", "RNN-LSTM", "music21", "Keras", "TensorFlow"],
      github: "https://github.com/shettyrohit0810/Melody-Generation-using-RNN-LSTM",
      website: "",
      researchPaper: "https://ieeexplore.ieee.org/abstract/document/10276249",
      color: "#F93E5B"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      image: Project3,
      description: "I Developed A Personal Portfolio Website To Showcase My Skills, Projects, And Experience As A Web Developer.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shettyrohit0810/Personal-Portfolio",
      website: "#",
      color: "#f1c40f"
    },
    {
      id: 4,
      title: "Android Art Explorer App",
      image: Project4,
      description: "A native Android application for browsing and discovering artworks from various artists and categories, built with Java and Android Studio.",
      tags: ["Java", "Android Studio", "XML", "Material Design"],
      github: "https://github.com/shettyrohit0810/Android-Art-Explorer-App",
      website: "",
      color: "#4285F4"
    },
    {
      id: 5,
      title: "Art Explorer Web",
      image: Project5,
      description: "A responsive, interactive Angular web app that lets users search for artists, view artworks, and manage their favorites.",
      tags: ["Angular", "TypeScript", "RxJS", "Bootstrap", "JWT"],
      github: "https://github.com/shettyrohit0810/Art-Explorer-Web",
      website: "https://rohit-hw-3.wl.r.appspot.com/search",
      color: "#dd1b16"
    }
  ];

  const projectsToShow = showMore ? projects : projects.slice(0, 3);

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsToShow.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container" style={{ backgroundColor: project.color }}>
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy" 
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="buttons">
                {project.github && (
                  <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="GitHub" />
                    Source Code
                  </a>
                )}
                {project.website && (
                  <a href={project.website} className="btn" target="_blank" rel="noopener noreferrer">
                    <img src={ExternalLinkIcon} alt="Link" />
                    Website
                  </a>
                )}
                {project.researchPaper && (
                  <a href={project.researchPaper} className="btn" target="_blank" rel="noopener noreferrer">
                    <img src={ExternalLinkIcon} alt="Link" />
                    Research Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 