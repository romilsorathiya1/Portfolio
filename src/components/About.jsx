import React from 'react'
import myimg from '../assets/aboutPhoto.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(()=>{
    gsap.from(".about-left",{
      scrollTrigger:{
        trigger:".about-left",
        scroller:"body",
        start:"top 50%",
         toggleActions: "play none none reverse"
      },
      x:-500,
      duration:1,
      opacity:0
    })
    gsap.from(".about-right",{
      scrollTrigger:{
        trigger:".about-right",
        scroller:"body",
        start:"top 50%",
         toggleActions: "play none none reverse"
      },
      x:500,
      duration:1,
      opacity:0
    })
  })
  return (
    <section className='about' id='about'>
      <h1 className='about-heading'>About me</h1>
      <div className='about-main'>
        <div className='about-left'>
          <img src={myimg} alt="" />
        </div>
        <div className='about-right'>
        <div className='about-right-description'>
          <p>I'm a passionate Full-Stack Web Developer who loves building modern, responsive, and high-performance web applications. With a strong foundation in both front-end and back-end technologies, I create seamless user experiences backed by robust server-side logic.</p>

          <p>From crafting interactive user interfaces using React, HTML, CSS, and JavaScript, to building powerful APIs and databases using Node.js, Express, and MongoDB (or other stacks), I enjoy working across the entire development process.
          </p>

          <p>Whether it's designing, developing, or deploying, I take pride in writing clean, scalable, and efficient code. I'm always learning and exploring new tools to stay ahead in the fast-moving world of web development.
          </p>

          <p>
            Let’s build something awesome together.
          </p>



        </div>
        </div>
      </div>
    </section>
  )
}

export default About
