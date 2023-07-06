import React from 'react';
import './styles/projects.css';
import RegPort from './assets/RegPortfolio.png';
import Quiz from './assets/Quiz.png';
import SparkRose from './assets/Sparkrose.png';
import DailyCalendar from './assets/DailyCalendar.png';
import Groan from './assets/Groan.png';
import README from './assets/README.png';


const projects = [
  {
    title: 'Portfolio',
    image: RegPort,
    deployLink: 'https://strait2thepoint.github.io/Strait2thePointPortfolio/',
    githubLink: 'https://github.com/strait2thepoint/Strait2thePointPortfolio.git',
  },
  {
    title: 'Spark',
    image: SparkRose,
    deployLink: 'https://hankrichter.github.io/Spark/',
    githubLink: 'https://github.com/strait2thepoint/Spark.git',
  },
  {
    title: 'Daily Calendar',
    image: DailyCalendar,
    deployLink: 'https://strait2thepoint.github.io/Daily-Calendar/',
    githubLink: 'https://github.com/strait2thepoint/Daily-Calendar.git',
  },
  {
    title: 'Javascript Quiz',
    image: Quiz,
    deployLink: 'https://strait2thepoint.github.io/JavascriptQuiz/',
    githubLink: 'https://github.com/strait2thepoint/JavascriptQuiz.git',
  },
  {
    title: 'Groan Zone',
    image: Groan,
    deployLink: 'https://young-reef-43824.herokuapp.com/login',
    githubLink: 'https://github.com/strait2thepoint/GroanZone.git',
  },
  {
    title: 'Professional README Generator',
    image: README,
    deployLink: 'https://watch.screencastify.com/v/Ke9u3eb5aw8Xh5wJG8KH',
    githubLink: 'https://github.com/strait2thepoint/PotentialEnigmaMod9.git',
  },
];

function Projects() {
  return (
    <div className="projects">
      <h2 className="h2">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3 className="project-title">{project.title}</h3>
            {typeof project.image === 'string' ? (
              <img src={project.image} alt={project.title} className="project-image" />
            ) : (
              project.image
            )}
            <div className="project-links">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a><br/>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
