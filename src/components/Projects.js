import React from 'react';
import './Projects.css';
import Project1 from '../Assets/Project1.webp';
import Project2 from '../Assets/Project2.webp';
import Project3 from '../Assets/Project3.webp';
import StrokeProject from '../Assets/Stroke_Project.png';
import Project4 from '../Assets/Project4.webp';
import Project5 from '../Assets/Project5.webp';
import GithubIcon from '../Assets/Github.svg';
import ExternalLinkIcon from '../Assets/external-link.svg';

const Projects = ({ showMore }) => {
  const projects = [
    {
      id: 1,
      title: "ATS Optimizer",
      image: Project1,
      description: "Transform your resume into an ATS-friendly, job-aligned profile. ATS Optimizer analyzes your resume and job description to generate actionable insights, keyword coverage, gap analysis, sentence-level feedback, and job fit score.",
      tags: ["Next.js", "TypeScript", "Node.js", "Express", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com/shettyrohit0810/Ats-Optimizer",
      website: "https://ats-optimizer.netlify.app/",
      color: "#0EDA7D"
    },
    {
      id: 2,
      title: "Art Explorer Web",
      image: Project2,
      description: "A responsive Angular web application for exploring artworks and artists. Features include search functionality, favorites management, and interactive galleries.",
      tags: ["Angular", "TypeScript", "RxJS", "Bootstrap", "JWT"],
      github: "https://github.com/shettyrohit0810/Art-Explorer-Web",
      website: "https://rohit-hw-3.wl.r.appspot.com/search",
      color: "#dd1b16"
    },
    {
      id: 3,
      title: "Brain Stroke Prediction using DNN",
      image: StrokeProject,
      description: "A machine learning system for predicting stroke risk in patients using Deep Neural Networks. Achieved 92% accuracy with comprehensive data analysis and visualization.",
      tags: ["Python", "TensorFlow", "Deep Learning", "Streamlit", "Scikit-learn"],
      github: "https://github.com/shettyrohit0810/Brain-Stroke-Prediction-using-DNN",
      website: "https://ieeexplore.ieee.org/abstract/document/10276249",
      color: "#f1c40f"
    },
    {
      id: 4,
      title: "Android Art Explorer App",
      image: Project4,
      description: "A native Android application for discovering and exploring artworks. Features a modern Material Design UI, category browsing, and artist profiles.",
      tags: ["Java", "Android Studio", "XML", "Material Design"],
      github: "https://github.com/shettyrohit0810/Android-Art-Explorer-App",
      website: "",
      color: "#4285F4"
    },
    {
      id: 5,
      title: "Melody Generation",
      image: Project5,
      description: "An AI-powered music generation system using RNN-LSTM architecture. Achieved 92% accuracy in melody prediction and generation with comprehensive model training.",
      tags: ["Python", "RNN-LSTM", "music21", "Keras", "TensorFlow"],
      github: "https://github.com/shettyrohit0810/Melody-Generation-using-RNN-LSTM",
      website: "",
      color: "#F93E5B"
    },
    {
      id: 6,
      title: "Personal Portfolio",
      image: Project3,
      description: "A modern portfolio website showcasing my projects and skills. Features include dark mode, interactive animations, responsive design, and integrated contact system.",
      tags: ["React", "Tailwind CSS", "JavaScript", "EmailJS", "Netlify"],
      github: "https://github.com/shettyrohit0810/Personal-Portfolio",
      website: "https://rohitshetty.netlify.app/",
      color: "#61DAFB"
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 