import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ticTacToe from "../assets/ticTacToe.png"
import QRcodeGenerator from "../assets/QRcodeGenerator.png"
import geminiClone from "../assets/geminiClone.png"
import tools_io from "../assets/tools.io.png"
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  const items = [
    {
      name: "Tools.io",
      description: "I built Tools.io, an AI-powered tools library that brings multiple utilities together in one platform. It features a collection of smart tools including Image Generation, Resume Builder, Resume Analyzer, Image Background Remover, Chatbot, AnswerBook, CodeXa, and QR Code Generator. Each tool is designed with a clean, user-friendly interface and seamless functionality. This project showcases my ability to work with API integrations, dynamic UI development, and modular React components to create a versatile and scalable platform that solves real-world problems.",
      img: tools_io,
      liveDemo: "https://romilstools-io.vercel.app/",
      sourceCode: "https://github.com/romilsorathiya1/tools.io"
    },
    {
      name: "Gemini-Clone",
      description: "I developed a Gemini AI Clone using React that allows users to interact with an AI assistant through text, image, and PDF inputs. The app provides well-formatted Markdown responses with code highlighting, bullet points, and structured content. It demonstrates my skills in API integration, file handling, and building dynamic, user-friendly interfaces with React.",
      img: geminiClone,
      liveDemo: "https://romilsgeminiclone.netlify.app/",
      sourceCode: "https://github.com/romilsorathiya1/Gemini-Clone"
    },
    {
      name: "QR Code Generator",
      description: "I built a QR Code Generator using React that lets users create QR codes instantly by entering text or URLs. Users can customize the QR code with different colors and background options for a personalized look. The app features a clean, responsive UI with real-time updates, showcasing my skills in React, state management, API integration, and user input handling.",
      img: QRcodeGenerator,
      liveDemo: "https://qrcodegeneratorbyromil.netlify.app/",
      sourceCode: "https://github.com/romilsorathiya1/QR-Code-Generator"
    },
    {
      name: "Tic Tac Toe",
      description: "I developed a responsive Tic Tac Toe game using HTML, CSS, and JavaScript. The game includes real-time win detection, a smooth user interface, and intuitive interactions. It showcases my skills in DOM manipulation, event handling, and frontend logic. The layout is optimized for both desktop and mobile devices.",
      img: ticTacToe,
      liveDemo: "https://romilstictactoe.netlify.app/",
      sourceCode: "https://github.com/romilsorathiya1/Tic-Tac-Toe-Game"
    },
  ]
  const itemRefs = useRef([]);
  useGSAP(() => {

    itemRefs.current.forEach((item, i) => {
      if (i !== 0) {
        gsap.set(item, { yPercent: 100 })
      }
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-main",
        pin: true,
        start: "top 25h",
        end: () => `+=${itemRefs.current.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: { ease: "none" },
    });

     itemRefs.current.forEach((item, index) => {
      if (index < itemRefs.current.length - 1) {
        timeline.to(item, {
          scale: 0.9,
          borderRadius: "10px",
        });
        timeline.to(itemRefs.current[index + 1], { yPercent: 0 }, "<");
      }
    });
  })

  return (
    <section id='projects' className='projects'>
      <h1 className='projects-heading'>Projects</h1>
      <div className='projects-main'>
        {
          items.map((item, i) => {
            return (

              <div className="item" key={i} ref={(ele) => (itemRefs.current[i] = ele)}>
                <div className="item-content">
                  <h2 className="item-number">{i + 1}</h2>
                  <h2>{item.name}</h2>
                  <p className="item-p">{item.description}</p>
                  <div className="item-btn">
                    <a href={item.liveDemo} className='live-demo-btn' target='_blank'>Live Demo</a>
                    <a href={item.sourceCode} className='source-code-btn' target='_blank'>Source Code</a>
                  </div>
                </div>
                <div className="item-img">
                  <img src={item.img} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </section >
  )
}

export default Projects