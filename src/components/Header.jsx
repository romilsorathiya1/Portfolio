import React, { useState } from 'react'
import DarkModeToggle from './DarkModeToggle';
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
  const [menu,setMenu]=useState(false)
  const handleMenubar=()=>{
    setMenu((m)=>!m)
  }

  useGSAP(()=>{
    const tl=gsap.timeline()
    tl.from([".logo" , ".link" , ".toggle-btn" , ".hamburger"],{
      y:-100,
      duration:0.5,
      opacity:0,
      stagger:0.1
    })
  })
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <span>Romil</span>
        </div>
        <div className="links">
          <div className="link"><a href="#home">Home</a></div>
          <div className="link"><a href="#about">About</a></div>
          <div className="link"><a href="#skills">Skills</a></div>
          <div className="link"><a href="#projects">Projects</a></div>
          <div className="link"><a href="#education">Education</a></div>
          <div className="link contact-btn"><a href="#contact">Contact Us</a></div>
        </div>
   
        < DarkModeToggle className="toggle-btn btn"/>
        
      </div>
      


      <div className="nav-container mobile-nav-container">
        <div className="logo">
          <span>Romil</span>
        </div>
        <div className="links"style={{display: menu==true ? "flex" : "none"}}>
          <div className="link"><a href="#home">Home</a></div>
          <div className="link"><a href="#about">About</a></div>
          <div className="link"><a href="#skills">Skills</a></div>
          <div className="link"><a href="#projects">Projects</a></div>
          <div className="link"><a href="#education">Education</a></div>
          <div className="link contact-btn"><a href="#contact">Contact Us</a></div>
        <RxCross2 className='nav-cross'style={{display: menu==true ? "block" : "none"}}
        onClick={handleMenubar}
        />
        </div>
        <div style={{display:"flex", alignItems:"center", gap:"2vw"}}>
        < DarkModeToggle className="toggle-btn btn"/>
        <RxHamburgerMenu className='hamburger' style={{fontSize:"4vw",marginRight:"3vw",visibility: menu==false ? "visible" : "hidden"}} 
        onClick={handleMenubar}
        ></RxHamburgerMenu> 
        </div>
      </div>
      
    </nav>
  )
}

export default Header