import React from 'react'

function Education() {
  return (
    <section className="education" id="education">
      <h1 className='education-heading'>Education</h1>
      <div className="education-line">
        <div className="circle">
          <div className="education-discription right">
            <h2>Secondary Education</h2>
            <p>Oxford School of Science, Amreli</p>
            <p>Completed in 2021</p>
            <p>Achieved 93.13pr in 10th Standard (GSEB)</p>
          </div>
        </div>
        <div className="circle">
          <div className="education-discription left">
            <h2>Higher Secondary Education </h2>
            <p>Oxford School of Science, Amreli</p>
            <p>Completed in 2023</p>
            <p>Achieved 97.01pr in 12th Standard (GSEB)</p>
          </div>
        </div>
        <div className="circle">
          <div className="education-discription right">
            <h2>B.Sc. CA & IT</h2>
            <p>Shreyarth University, Ahmedabad</p>
            <p>Currently in 3rd Year</p>
            <p>Last Sem SGPA: 9.55</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education