import "./AboutContentStyles.css"
import {Link} from 'react-router-dom'
import cf from "../assets/codeForces.png"
import cc from "../assets/codechef.png"
import lt from "../assets/leetcode.png"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="wrapper">
        <h1 className="starting">Hello,</h1>
        <p className="initials">I am Gaurav Biswas,I currently am a student at IIT Patna in my 3rd year pursuing Btech on Electrical and Electronics.I am an enthusiast learner who likes to learn more about new things on a day-to-day basis.I also love playing outdoor games especially badminton.I also love music whenever i am feeling down music is always my therapy and i love it..Aside from music Anime is also my thing.If we have something in common, we're going to have a lot to talk about!</p>

        <h1 style={{paddingTop:'50px', paddingLeft:"150px", color:'#FAFFAF'}}>Education.</h1>
        <div className="details">
          <div className="box">
            <h2 style={{color:'#B1AFFF'}}>2020</h2>
            <p>I have succesfully Completed my 10th grade from Bongaon High School with 92.4%.</p>
          </div>

          <div className="box">
            <h2 style={{color:'#B1AFFF'}}>2022</h2>
            <p>Attained 12th-grade qualifications with a focus on Physics, Chemistry , Mathematics and Biology from Bongaon High School with 91.28%.</p>
          </div>

          <div className="box">
            <h2 style={{color:'#B1AFFF'}}>2022-2026</h2>
            <p>Currently enrolled in a Bachelor of Technology program specializing in Electrical and Electronics Engineering at Indian Institute Of Technology Patna.</p>
          </div>

          <div className="coding">
            <h1 style={{paddingTop:'50px', color:'#FAFFAF'}}>Coding Profile</h1>
            <p>I am also a competitaive coder.Some of the coding profiles are below..</p>
            <div className="icons">
              <Link to="https://codeforces.com/profile/Cakee" target="_blank" style={{paddingRight:"30px"}}>
                <img src={cf} alt="codeforces-icon" />
              </Link>
              <Link to="https://www.codechef.com/users/jitu01" target="_blank">
                <img src={cc} alt="codechef-icon" style={{height:"64px", padding:"0px 10px", background:"white"}}/>
              </Link>
              <Link to="https://leetcode.com/u/SunGod_Nika/" target="_blank">
                <img src={lt} alt="leetcode-icon" style={{padding:"0px 30px"}}/>
              </Link>
            </div>
          </div>

          <div className="Tech">
            <h1 style={{paddingTop:'50px', color:'#FAFFAF'}}>Technological Capabilites</h1>
            <p style={{letterSpacing:"2px"}}>I have decent knowledge in HTML , CSS , JS , Jquery , bootstrap , react , tailwind css , mongodb , node js , express js , C , C++ , python and some full stack framework like nextjs Some OS tools like git , Git-hub and VS-code. </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutContent