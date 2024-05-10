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

      <div className = "page-body">

      </div>
      
    </div>
  )
}

export default Home