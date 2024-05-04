import './App.css';
import Sidenav from './components/Sidenav.js';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import {useState} from 'react';

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <Router>
        <Sidenav 
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);}}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>

      </Router>
        
    </div>
  );
}

export default App;
