import React from 'react';
import './styles/resume.css'

function Resume() {
  return (
    <div className="resume">
      <h2 className="h2">Resume</h2>
      <p>You can download my resume by clicking the link below:</p>
      <a href={process.env.PUBLIC_URL + '/assets/General Resume.docx'} download>Download Resume</a>
      
      <h2 className="h2">Proficiencies</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Bootstrap</li>
        <li>APIs</li>
        <li>JQuery</li>
        <li>JSON</li>
        <li>AJAX</li>
        <li>Node</li>
        <li>ES6</li>
        <li>Object-oriented programming</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MVC paradigm</li>
        <li>Sequelize</li>
        <li>Progressive Web Apps</li>
        <li>React</li>
        <li>NoSQL</li>
        <li>MERN Stack</li>
        <li>Computer science fundamentals</li>
        <li>Agile development</li>
        <li>Team collaboration</li>
      </ul>
      <div className="iframe-container">
      <div className="iframe-wrapper">
      <iframe
        title="Resume"
        src="https://docs.google.com/document/d/e/2PACX-1vSwBiCwXLWpNE9uyiix5b_qS5fBVg9JF5gCe8USjA3bUDHKvEgQtof9tpU3bUS6Rw/pub?embedded=true"
        style={{ width: '300%', height: '800px', border: 'none' }}
        sandbox="allow-scripts"
      ></iframe>
      </div>
      </div>
    </div>
  );
}

export default Resume;
