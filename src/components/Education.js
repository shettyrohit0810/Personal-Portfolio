import React from 'react';
import './Education.css';
import Education1 from '../Assets/Education1.webp';
import Education2 from '../Assets/Education2.webp';
import DeepLearningLogo from '../Assets/DeepLearning.webp';
import HBSLogo from '../Assets/HBS.webp';

const educationData = [
  {
    institution: 'University of Southern California',
    degree: 'Master of Science, Computer Science',
    specialization: 'Web Technology, Artificial Intelligence',
    dates: 'January 2025 – December 2026',
    location: 'Los Angeles, California',
    logo: Education1,
    logoBgColor: '#990000'
  },
  {
    institution: 'Ramrao Adik Institute of Technology',
    degree: 'Bachelor of Computer Science, Minor in Data Science',
    specialization: 'Data Structures and Algorithms, Machine Learning, System Design, Database, Data Warehousing',
    dates: 'July 2020 – July 2024',
    location: 'Navi Mumbai, India',
    logo: Education2,
    logoBgColor: '#FFFFFF'
  }
];

const certificationData = [
  { name: 'Oracle Cloud Infrastructure (OCI) Generative AI Certified Professional', issuer: 'Oracle', date: 'Jul 2024 - Jul 2026', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Oracle_Logo.svg', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=6D679A6402A0356E1852D7128999277B06DB9085B1C7076A778DE246CC94F941' },
  { name: 'HTML, CSS, and Javascript for Web Developers', issuer: 'Coursera', date: 'Issued Jun 2024', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg', url: 'https://coursera.org/share/a02322a1cca465b6153599cd15658c69' },
  { name: 'The Complete Python Bootcamp From Zero to Hero in Python', issuer: 'Udemy', date: 'Issued May 2024', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg', url: 'https://www.udemy.com/certificate/UC-10319188-5c19-4a0f-ada4-8cc135c42b43/' },
  { name: 'Multimodal RAG: Chat with Videos!', issuer: 'DeepLearning.AI', date: 'Issued Sep 2024', logo: DeepLearningLogo, url: 'https://learn.deeplearning.ai/accomplishments/a6606be9-12c5-4f10-bb85-127795259dbb?usp=sharing' },
  { name: 'Entrepreneurship Essentials eDiploma', issuer: 'Harvard Business School Online', date: 'Issued Jun 2023', logo: HBSLogo, url: 'https://www.michaelsutter.com/ediploma?key=0200000007eeb3171edd01ebec0faa1aa28ea041f0b26bd279abb7e72834a28cb0fb30c15e5b26942e3ff5d60257afb9dccf4b9f43edeb5d99e89df8661f149684960278' },
  { name: 'Sustainable Business Strategy eDiploma', issuer: 'Harvard Business School Online', date: 'Issued Feb 2022', logo: HBSLogo, url: 'https://www.michaelsutter.com/ediploma?key=02000000fe957e0fd498c40032072b5c0079c36ec92967edba7751faddb67e693476ec61a89a22e0361f730429a5d154fc6ce21d45795f1e6daa1a6768967f8abef25391' },
];

const Education = ({ showAllCertificates, onShowMoreCertificates }) => {
  const visibleCertificates = showAllCertificates ? certificationData : certificationData.slice(0, 3);

  return (
    <div id="education-section" className="education-container">
      <div className="education-header">
        <h2 className="education-title">Education</h2>
        <p className="education-subtitle">ACADEMIC MILESTONES</p>
      </div>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-logo" style={{ backgroundColor: edu.logoBgColor }}>
              <img src={edu.logo} alt={`${edu.institution} logo`} />
            </div>
            <div className="education-details">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p className="education-specialization">{edu.specialization}</p>
            </div>
            <div className="education-info">
              <p className="education-dates">{edu.dates}</p>
              <p className="education-location">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="certifications-section">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-list">
          {visibleCertificates.map((cert, index) => {
            const content = (
              <div key={index} className="certification-item">
                <div className="certification-logo">
                  <img src={cert.logo} alt={`${cert.name} logo`} />
                </div>
                <div className="certification-details">
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <p className="certification-date">{cert.date}</p>
              </div>
            );

            if (cert.url) {
              return (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certification-link">
                  {content}
                </a>
              );
            }
            return content;
          })}
        </div>
        {!showAllCertificates && certificationData.length > 3 && (
          <div className="see-more-container">
            <button onClick={onShowMoreCertificates} className="see-more-button">
              See more certificates
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education; 