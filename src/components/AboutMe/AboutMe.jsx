import React from 'react';
import './styles/aboutMe.css';
import profileImage from '../AboutMe/assets/IMG_20221124_165848064~2.jpg';


const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className ="h2">About Me</h2>
      <img className="profile-image" src={profileImage} alt="Profile" />

      <p>
      Throughout my life I have had many opportunities for unique learning. It has been my privilege to walk beside many women escaping intimate partner violence. I have owned my own business designing and making products for those with medical disabilities. I have had my own struggles with chronic illness, which has made me more aware of those with invisible disabilities. Thanks to my children, I have learned about autism, ADHD and the struggles that LGBTQ teenagers face in their families and lives. I spend part of every day advocating for marginalized people groups, those caught in abusive situations and teaching people about various forms of oppression that they face. Through this process, I have learned to embrace and love every part of me, knowing that my faults lead to more learning opportunities and my strengths can be used to benefit others. I have always had a love of puzzles and problem solving. The life I have lived has given me creative ways of approaching problems and artistic, yet practical solutions. As I learn to code, my artistic expression can only grow with the tools I discover along the way.
      </p>
    </div>
  );
};

export default AboutMe;
