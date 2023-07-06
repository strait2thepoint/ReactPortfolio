import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1 className='name'>Laura J. Strait</h1>
      <nav className='list'>
        <ul className="nav-list">
          <li>
           <Link to="/portfolio" > <button style={{ color: 'rgb(238, 188, 258)' }}className="nav-button navP">Portfolio            </button>
</Link>
          </li>
          <li>
            
              <Link to="/contact" ><button style={{ color: 'violet' }} className="nav-button navC">Contact</button></Link>
            
          </li>
          <li>
            
              <Link to="/projects" ><button style={{ color: 'white' }}className="nav-button navPr">Projects</button></Link>
            
          </li>
          <li>
          
              <Link to="/about-me" >  <button style={{ color: 'navy' }}className="nav-button navA">About Me</button></Link>
            
          </li>
          <li>
            
              <Link to="/resume" ><button style={{ color: '#000027' }}className="nav-button navR">Resume </button></Link>
           
          </li>
        </ul>
      </nav>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/strait2thepoint">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/strait2thepoint/">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/SewStrait">
        <FaTwitter />
      </a>
      <a href = "https://www.facebook.com/strait2thepoint">
      < FaFacebook />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      Made with ❤️ by <a href="https://github.com/strait2thepoint">Strait2thePoint</a>.
      <SocialLinks />
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
