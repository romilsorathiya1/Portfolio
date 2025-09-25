import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <footer className='footer'>
      <h2>Romil Sorathiya</h2>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="footer-socialmedia">
        <a href="https://github.com/romilsorathiya1" target='blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/romil-sorathiya-1b187b303/" target='blank' ><FaLinkedin /></a>
        <a href="https://www.instagram.com/mr_romil_sorathiya/?next=%2F&hl=en" target='blank' ><GrInstagram /></a>    
      </div>
      <p className='footer-rights'>© 2025 Romil Sorathiya. All rights reserved.</p>

    </footer>
  )
}

export default Footer