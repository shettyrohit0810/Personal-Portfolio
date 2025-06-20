import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.css';
import LeetCodeLogo from '../Assets/LeetCode.webp';

const ContactModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('quick');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const charLimit = 1000;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // IMPORTANT: Replace with your actual EmailJS IDs
    const serviceID = 'Rohit Portfolio'; // Note: If this fails, it's likely not the correct Service ID from EmailJS.
    const templateID = 'template_fequ5ow';
    const userID = 'r1DLwQSht96qHdRxd'; // This is your Public Key

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
          onClose();
        }, 3000);
      })
      .catch((err) => {
        setIsSending(false);
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shettyrohit0810/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/shettyrohit0810" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* <a href="https://leetcode.com/u/shettyrohit0810/" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <img src={LeetCodeLogo} alt="LeetCode Logo" width="24" height="24" />
            </a> */}
          </div>
          <button onClick={onClose} className="close-modal-btn">&times;</button>
        </div>
        <div className="modal-tabs">
          <button className={`modal-tab ${activeTab === 'quick' ? 'active' : ''}`} onClick={() => setActiveTab('quick')}>Quick connect</button>
          <button className={`modal-tab ${activeTab === 'form' ? 'active' : ''}`} onClick={() => setActiveTab('form')}>Fill a form</button>
        </div>
        
        {activeTab === 'quick' ? (
          <div className="modal-content">
            <a href="mailto:shettyrohit0810@gmail.com" className="connect-card highlighted">
              <div className="card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>Email</span>
              </div>
              <div className="card-body">
                <p className="card-title">shettyrohit0810@gmail.com</p>
                <p className="card-description">Send me an email directly</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/shettyrohit0810/" target="_blank" rel="noopener noreferrer" className="connect-card email-card">
              <div className="card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </div>
              <div className="card-body">
                <p className="card-title">Professional Network</p>
                <p className="card-description">Connect with me on LinkedIn</p>
              </div>
            </a>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" value={formData.email} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="What would you like to discuss?"
                rows="4"
                maxLength={charLimit}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <div className="char-counter">{message.length}/{charLimit}</div>
            </div>
            <button type="submit" className="send-btn" disabled={isSending || isSent}>
              {isSending ? 'Sending...' : isSent ? 'Sent!' : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  <span>Send message</span>
                </>
              )}
            </button>
          </form>
        )}

        {activeTab === 'quick' && (
          <div className="availability-footer">
            <span className="availability-dot"></span>
            Currently available for new opportunities
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal; 