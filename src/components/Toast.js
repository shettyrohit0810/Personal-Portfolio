import React from 'react';
import './Toast.css';

const Toast = ({ show, exiting }) => {
  const handleSendEmail = (e) => {
    e.stopPropagation();
    window.location.href = "mailto:shettyrohit0810@gmail.com";
  };

  return (
    <div className={`toast-container ${show ? 'show' : ''} ${exiting ? 'exiting' : ''}`}>
      <div className="toast-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div className="toast-content">
        <p className="toast-title">Copied to clipboard!</p>
        <p className="toast-description">Email address copied successfully.</p>
      </div>
      <button className="toast-button" onClick={handleSendEmail}>
        Send Email
      </button>
    </div>
  );
};

export default Toast; 