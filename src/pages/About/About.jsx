import React from 'react'
import './About.css'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about">
        <div className="about-image">
            <img src={assets.profile_no_bg} alt="" />
        </div>
        <div className="about-contents">
            <div>
                <h1>About <span>Me</span></h1>
                <h2>Full Stack Developer !</h2>
            </div>
            <div className="about-description">
                <p>I am Rahul Raman, currently pursuing a Bachelor of Engineering in Electronics and Communication Engineering. I am passionate about web development, both frontend and backend, and I am actively seeking opportunities in this field. My enthusiasm for web development drives me to constantly learn and improve my skills, ensuring that I stay up-to-date with the latest technologies and best practices.</p>
            </div>
            <Link to='/education'><button className="about-btn">Read more</button></Link>
        </div>      
    </div>
  )
}

export default About
