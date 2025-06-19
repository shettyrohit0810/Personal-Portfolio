import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Delphi Consultant Middle East',
    title: 'Data Associate – AI & Data',
    dates: 'August 2024 – December 2024',
    location: 'Mumbai, India',
    description: [
      'Built an AI chatbot with Azure OpenAI and SQL, led ATS optimization sessions, and handled data migration and ingestion using Databricks.',
    ],
  },
  {
    company: 'BTB – Be The Bank',
    title: 'Software Engineer Intern',
    dates: 'January 2024 – July 2024',
    location: 'Remote, India',
    description: [
      'Led M-Pesa API integration for B2B payments, improving reliability and reducing failures by 30% through strong team and stakeholder collaboration.',
    ],
  },
  {
    company: 'Spay India',
    title: 'Software Engineer Intern',
    dates: 'January 2023 – April 2023',
    location: 'Navi Mumbai, India',
    description: [
      'Developed core features and optimized database architecture for a B2B2C fintech platform using JDK and React, scaling to 10,000+ users.',
    ],
  },
];

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div id="experience-section" className="experience-container">
      {/* Overlay to cover stars background */}
      <div className="experience-bg-overlay"></div>
      <h2 className="experience-title">My Experience</h2>
      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            {index % 2 === 0 ? (
              <>
                <div className="timeline-info">
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company} • {exp.location}</p>
                    <div className="experience-description">
                      {exp.description.map((point, i) => (
                        <div key={i}>{point}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="timeline-date">{exp.dates}</div>
              </>
            ) : (
              <>
                <div className="timeline-date">{exp.dates}</div>
                <div className="timeline-info">
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company} • {exp.location}</p>
                    <div className="experience-description">
                      {exp.description.map((point, i) => (
                        <div key={i}>{point}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 