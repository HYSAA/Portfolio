import React from 'react';
import './Experience.css';
import Cerenimbus from '../assets/styles/cerenimbus.png';
export default function Experience() {
 return (
    <section id="experience-section">
      <h2>Experience</h2>
          <hr className="underline" />
      <div className="experience-row">
        <img src={Cerenimbus} alt="Company Logo" className="experience-logo" />
        <div className="experience-details">
          <div className="header-row">
            <h3>Software Developer Intern</h3>
            <span className="date-range">Jan - Apr</span>
          </div>
          <p>Cerenimbus</p>
        </div>
      </div>
    </section>
  );
}