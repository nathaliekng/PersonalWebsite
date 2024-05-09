import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import '../App.css';
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import SocialsButton from '../components/SocialsButton';


const socialsItems = [
  {name: "LinkedIn", to: "https://www.linkedin.com/in/nathalie-ng/", Icon: CiLinkedin,iconClass:"contact-icon", itemClass:"contact-item"},
  {name: "Github", to: "https://github.com/nathaliekng", Icon: VscGithub, iconClass:"contact-icon", itemClass:"contact-item"},
]


function Contact() {
  const form = useRef();
  const [confirmed, setConfirmed] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText('nathalie.ng@torontomu.ca');
  }
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ocysv79', 'template_ycfeu9e', form.current, {
        publicKey: '7Qov7QghvoELLqwLp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setConfirmed(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <div className="pages">
      <div className = "page-header">
        <div className="heading">
          <div>Let's Connect!</div>
        </div>
        <div className="heading-details">
          <div>Feel free to reach out by sending me an email. </div>
          <div> I'd love to explore opportunities together.</div>
        </div>
      </div>

      <div className="contact-container">
        <span>
          <div className="sub-container">
            <div className="heading">Get In Touch</div>
            <div className="contact-form-container">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" placeHolder="Name" name="user_name" required />
                <input type="email" placeHolder="Email" name="user_email" required />
                <input type="text" placeHolder="Subject" name="subject" required />
                <textarea placeHolder="Message" name="message" required />
                <input type="submit" value="Send Message" />

                {confirmed ? "Your message has been sent" : ""}
              </form>
              

            </div>
          </div>
          <div className="sub-container">
            <div className="contact-subcontainer">
              <div className="heading">Contact</div>
              <ul>
                <li className="contact-item">
                  <div className="flex-container">
                    <div className="contact-icon">
                    <AiOutlineMail/>
                    </div>
                    <span onClick={copyToClipboard}>nathalie.ng@torontomu.ca</span>
                    
                  </div>
                  <div>{copied ? "Copied to clipboard" : ""}</div>

                </li>
              </ul>
            </div>

            <div className="contact-subcontainer">
              <div className="heading">Socials</div>
                <ul>
                  {
                    socialsItems.map((socialItem, index) => (
                      <SocialsButton 
                        key={index} 
                        name={socialItem.name}
                        to={socialItem.to} 
                        Icon={socialItem.Icon} 
                        iconClass={socialItem.iconClass}
                        itemClass={socialItem.itemClass}
                      />
                    ))
                  }
                </ul>
              </div>
            </div>
           
            
        </span>
      </div>      
    </div>
  )
}

export default Contact