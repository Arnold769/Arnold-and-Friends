// FROM ohemaas-page


import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="profile-section">
        <img src="/29E42FAC-AB7A-443A-8FBE-4361F85DB302.jpeg" alt="Profile" className="profile-image" />
        <h2>Ohemaa Ama Ampomaah Boakye</h2>
        <h3>About Me</h3>
        <p>
          I’m a final-year Computer Science student at Ashesi University in Ghana. With a passion for technology and innovation,
          I am developing strong technical skills and gaining hands-on experience in software development.
          Outside of my studies, I enjoy reading and watching series to relax and get inspired.
          I'm excited to keep exploring and growing my skills in the tech field.
        </p>
      </div>

      <h2 className="section-title">MY PROFILE</h2>

      <div className="details-section">
        <div className="education">
          <h3>EDUCATION</h3>
          <p>Akosombo International School</p>
          <p>• Business Administration</p>
          <p>Ashesi University</p>
          <p>• Bachelor of Computer Science</p>
        </div>

        <div className="skills">
          <h3>SKILLS</h3>
          <p>• Problem Solving</p>
          <p>• Communication</p>
          <p>• Management</p>
          <p>• Teamwork</p>
        </div>
      </div>

      <div className="contact-info">
        <p>Email: ohemaa.boakye@ashesi.edu.gh</p>
        
      </div>
    </div>
  );
};

export default App;
