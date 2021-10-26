import React from 'react';
import './body.css';

import Separator from '../separtor';

import About from './about';
import Skills from './skills';
import Work from './work';
import Projects from './projects';
import Contact from './contact';

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <Separator />
      <section id="skills">
        <Projects />
      </section>
      <Separator />
      <section id="projects">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>

      <Separator />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
