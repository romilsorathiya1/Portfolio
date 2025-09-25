import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import gsapLogo from '../assets/tech_logo/gsap.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import problemSolvingLogo from '../assets/tech_logo/problemSolving.png'
import communicationLogo from '../assets/tech_logo/communication.png'
import attentionToDetailLogo from '../assets/tech_logo/attentionToDetail.png'
import teamCollaboartionLogo from '../assets/tech_logo/teamCollaboration.png'
import timeManagementLogo from '../assets/tech_logo/timeManagement.png'
import adaptabilityLogo from '../assets/tech_logo/adaptability.png'
import continuousLerningLogo from '../assets/tech_logo/continuousLerning.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Skills() {
const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React.js", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Gsap", logo: gsapLogo }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving",logo:problemSolvingLogo },
      { name: "Adaptability",logo:adaptabilityLogo },
      { name: "Team work",logo:teamCollaboartionLogo },
      { name: "Communication",logo:communicationLogo },
      { name: "Attention to Detail",logo:attentionToDetailLogo },
      { name: "Time Management",logo:timeManagementLogo },
      { name: "Continuous Learning",logo:continuousLerningLogo }
    ]
  }
];

useGSAP(()=>{
  gsap.utils.toArray(".skills-category1").forEach((box) => {
    gsap.from(box,{
      scrollTrigger:{
        trigger:box,
        scroller:"body",
        start:"top 50%",
        toggleActions: "play none none reverse"
      },
      x:-500,
      duration:1,
      opacity:0,
      stagger:0.2
    })
  })

  gsap.utils.toArray(".skills-category2").forEach((box) => {
    gsap.from(box,{
      scrollTrigger:{
        trigger:box,
        scroller:"body",
        start:"top 50%",
        toggleActions: "play none none reverse"
      },
      x:500,
      duration:1,
      opacity:0,
      stagger:0.2
    })
  })
  })



  return (
    <section className='skills' id='skills'>
      <h1 className='skills-heading'>My Skills</h1>
      <div className='skills-main'>

        {
          skills.map((category,i) => {
            return (
              <div className={(i+1)%2==0 ? "skills-category2" : "skills-category1"} key={i}>
                <h1>{category.category}</h1>
                <div className='category-skills'>
                {
                    category.skills.map(({name,logo},i) => {
                      return (
                        <p className='skill' key={i}><img src={logo} alt="" className='skill-img'/>{name}</p>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills