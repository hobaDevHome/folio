import React from 'react';
import './web.css';

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-settings option-icon"></i>projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-address-book option-icon"></i>skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-pencil option-icon"></i>work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-envelope option-icon"></i>contact
        </a>
      </div>
    </div>
  );
}

export default Web;
