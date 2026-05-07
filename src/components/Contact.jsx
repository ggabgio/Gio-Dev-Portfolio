import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "giogabrielgabriel@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        /* Reset */

        setTimeout(() => setCopied(false), 2000);
    };

return (
    <section id="contact" className="reach-me-section">
      <div className="reach-me-container">
        <h2 className="reach-me-title">Get in touch</h2>
        <p className="reach-me-subtitle">
          If you have any questions and want to reach me, copy the email below!
        </p>
        
        <div className="email-copy-wrapper" onClick={handleCopy}>
          <span className="reach-me-email">{email}</span>
          {copied && <span className="copy-feedback">Copied!</span>}
        </div>
      </div>
    </section>
  );
};

export default Contact;