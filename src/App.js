import './App.css';
import Sidenav from './components/Sidenav.js';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import {useState, createContext} from 'react';
import Available from './components/Available'
import ReactSwitch from 'react-switch';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const ThemeContext = createContext(null);

function App() {
  const [inactive, setInactive] = useState(false);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
      
      <Router>
        
        <Sidenav 
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);}}
        />
        <div className="switch">
          <label className="theme-label"> {theme == "light" ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}</label>
          <ReactSwitch onChange= {toggleTheme} checked={theme=="dark"}/>
        </div>
        <div className={`avail-container ${inactive ? "inactive" : ""}`}>
          <Available/>
        </div>
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
    </ThemeContext.Provider>

  );
}

export default App;
