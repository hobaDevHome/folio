import React from 'react';
import SocialContacts from '../../socialContacts';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I am
          <br /> <span className="info-name"> Heba Abdallah.</span>
          <br />A React and React Native developer
        </div>

        <div className="about-photo">
          <img
            src={require('../../../assets/coding1.png').default}
            className="picture"
          />
        </div>
      </div>

      <SocialContacts />
    </div>
  );
}

export default About;
