import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Footer = (props) => {
    return (
       <div className="footer-continer">
           <div className="github-logo">
                <a href="https://github.com/CabralE/business-app-client">
                <FaGithub
                        className="github-logo-link"
                />
               </a>
           
           </div>
           <div className="linkedin-logo">
                <a href="https://www.linkedin.com/in/edward-cabral" className="linkedin-logo-link">
                <FaLinkedin />  
               </a>
           </div>
       </div>
    )
};

export default Footer;