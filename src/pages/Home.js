import React from 'react'
import './Pages.css';
import RedirectButton from '../components/RedirectButton';


function Home() {
  return (
    <div className="pages">
      <div className = "page-header">
        <div className="heading">
          <div>Hi there!</div>
          <div>My name is Nathalie...</div>
        </div>
        <div className="heading-details">
          <div>I'm a passionate Software Engineer dedicated to building and continous learning.</div>
        </div>

        <div>
        <RedirectButton
            name="More About Me"
            to="/about"
            className="page-redirect-container"
        />    
        </div>  

      </div>
      <div className="about-details-container">
        <span>
          <div className="about-details">
            <div className="heading">
              Education
            </div>
            <div className="details">
              BSc. in Computer Science from Toronto Metropolitan University
            </div>
             <div>
              <RedirectButton
              name="Projects"
              to="/projects"
              className="page-redirect-container"
              />    
            </div>
          </div>
          <div className="about-details">
            <div className="heading">
              Stack
            </div>
            <div className="details">
              I am most comfortable with Java, and have experience with other languages such as Python. I am currently working to improve my JavaScript skills.
            </div>
            <div>
              <RedirectButton
              name="Stack"
              to="/stack"
              className="page-redirect-container"
              />    
            </div>
          </div>
        </span>
      </div>
      
    </div>
  )
}

export default Home