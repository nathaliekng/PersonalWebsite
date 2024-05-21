import React from 'react'
import './Pages.css';
import profilePhoto from '../assets/profile.jpg';
import Resume from "../assets/NathalieNg_Resume.pdf";
import RedirectButton from '../components/RedirectButton';
import DownloadButton from '../components/DownloadButton';


function About() {
  return (
    <div className="pages">
      <div className = "about-header">
        <span>
          <div className="about-details">
          
          <div className="heading">
            About Me
          </div>
          <div className="heading-details">
            Hi, I'm Nathalie, a recent Computer Science graduate with a focus on Software Engineering/Development.
          </div>
          <div>
            <DownloadButton
                name="Download Resume"
                file={Resume}
                className="page-redirect-container"
                downloadName="NathalieNg_Resume"
            />    
          </div>  

          </div>
          <div className="about-details-image">
          <img src={profilePhoto} alt =""/>
          </div>

        </span>
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

      <div className="about-experience-container">
        <div className="experience-heading">Experience</div>
        <div className="experience-subcontainer">
          <span>
            <div className="job">
              <div className="job-title">
                Developer Intern
              </div>
              <div className="job-details"> 
                <div>Royal Bank of Canada</div>
                <div>Jan. 2022 - Aug. 2022</div>
              </div>
            </div>
            <div className="job-description">
              Set up data migration to the cloud for 15+ batch jobs by updating 
              configurations and Docker base images to containerize and deploy applications. 
              Debugged coding errors and resolved any base image vulnerabilities in the CI/CD pipeline 
              to build jobs on Helios and proceed testing individual jobs in OCP. Used Hive to 
              compare table counts between the older databases to ensure that the data migration 
              proceeded smoothly. Assisted the QA and Production team in debugging any errors and setting up Elasticsearch pipelines to log errors in each environment. 
            </div>
          </span>
        </div>
        <div className="experience-subcontainer">
          <span>
            <div className="job">
              <div className="job-title">
                Mobile Application Developer
              </div>
              <div className="job-details"> 
                <div>Toronto Metropolitan University, First Year Engineering Office</div>
                <div>Internship: May 2021 - Aug. 2021</div>
                <div>Part-time: Sept. 2021 - Dec. 2021</div>
              </div>
            </div>
            <div className="job-description">
            Maintain and update the mobile app to improve user experience by adding features 
            such as notifications, navigation bar and a map with Xamarin and C#. Manage and 
            create ways to automate Academic Initiative work such as using Google Script to 
            reduce days worth of work into minutes. Created a Discord Bot with Python and 
            Google Script to generate and send out unique codes to verify registration 
            status and assign roles in a Discord server. 
            </div>
          </span>
        </div>
        <div className="experience-subcontainer">
          <span>
            <div className="job">
              <div className="job-title">
                Technical Process Analyst Intern
              </div>
              <div className="job-details"> 
                <div>Canadian Imperial Bank of Commerce</div>
                <div>Sept. 2020 - Dec. 2020</div>
              </div>
            </div>
            <div className="job-description">
            Improved macros in Excel for task files to maximize code efficiency and run-time. 
            Automated tasks such as compiling data and sending emails on Excel with VBA to 
            reduce the time spent on tasks up to 80%. Used Excel tables and formulas to 
            organize and display data for daily, weekly and monthly reports.
            </div>
          </span>
        </div>

      </div>
    </div>
  )
} 

export default About