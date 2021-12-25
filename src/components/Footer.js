import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Footer = (props) => {
    return (
       <div className="footer-continer">
           <div className="github-logo">
            <FaGithub/>
           </div>
           <div className="linkedin-logo">
            <FaLinkedin/>
           </div>
       </div>
    )
};

export default Footer;