import React from 'react'
import romilimg from '../assets/romil.png'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Home() {

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 


useGSAP(() =>{
  const tl=gsap.timeline()
  tl.from(".home-left-profession , .home-left-name , .home-left-resume",{
    x:-500,
    duration:1,
    opacity:0,
    stagger:0.2
  },"home")
  tl.from(".home-left-github-linkedin",{
    y:-50,
    duration:1,
    opacity:0,
  })
  tl.from(".myphoto",{
    x:500,
    duration:1,
    opacity:0
  },"home")
})
  return (
    <section className='home' id='home'>
      <div className='home-left'>
        <h1 className='home-left-name'>Hello, I'm <span>Romil</span></h1>
        <h2 className='home-left-profession'>I'm a &nbsp;
          <span>
             <Typewriter
          words={[
            'Fullstack Developer',
                'UI/UX Designer',
                'Coder'
              ]}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
          </span>
        </h2>
        <a href='https://drive.google.com/file/d/1zWWr7NR4RZXBNqk7Ox_UO5bG-2qXqhXj/view?usp=drive_link' target='blank' className='home-left-resume'>Download Resume</a>
        <div className='home-left-github-linkedin'>
          <a href="https://github.com/romilsorathiya1" target='blank' className='home-left-github'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/romil-sorathiya-1b187b303/" target='blank' className='home-left-linkedin'><FaLinkedin /></a>
        </div>
      </div>
      <div className='home-right'>
        <img className="myphoto" src={romilimg} alt="" />
      </div>
    </section>
  )
}

export default Home
