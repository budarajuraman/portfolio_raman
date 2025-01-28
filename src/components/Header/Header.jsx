import React , { useEffect , useRef } from 'react'
import { assets } from '../../assets/assets'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import Typed from "typed.js";
import './Header.css'

const Header = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Frontend Developer","Backend Developer"],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100
    });
    return () => {
      typed.destroy();
    };
    }, []);
    const linkedinurl="https://www.linkedin.com/in/rahul-raman-budaraju-82978a26a";
    const giturl="https://github.com/budarajuraman";
    const Xurl="https://x.com/rahul_raman28";
    const Instaurl="https://www.instagram.com/rahul_raman28/";

    return (
        <div className="header">
        <div className="header-contents">
            <div className="header-heading">
                <h2>Hi, Myself</h2>
                <h1>Rahul Raman</h1>
                <h2>And I'm a <span ref={el}>Frontend Developer</span></h2>
            </div>
            <p>My enthusiasm lies in exploring contemporary trends in technology and coding, with a specific focus on addressing real-time challenges and devising innovative solutions. Possessing adept logical and problem-solving skills, I aspire to contribute open source projects that demand agility and innovation in the ever-evolving landscape of engineering.</p>
            <div className="social-media-icons">
                <IconButton component="a" href={linkedinurl} className="icon" color="primary" fontSize="large" rel="noopener noreferrer">                                
                    <LinkedInIcon  sx={{ color: '#00acee' }} />
                </IconButton>
                <IconButton component="a" href={giturl} className="icon" color="primary" fontSize="large" rel="noopener noreferrer">                                
                    <GitHubIcon  sx={{ color: '#00acee' }} />
                </IconButton>
                <IconButton component="a" href={Instaurl} className="icon" color="primary" fontSize="large" rel="noopener noreferrer">                                
                    <InstagramIcon sx={{ color: '#00acee' }} /> 
                </IconButton>
                <IconButton component="a" href={Xurl} className="icon" color="primary" fontSize="large" rel="noopener noreferrer">                                
                    <TwitterIcon sx={{ color: '#00acee' }} />
                </IconButton>    
            </div>
            <button className="header-btn"><a href="/RahulRaman_Budaraju_resume.pdf" download="rahulraman_resume.pdf">Download CV</a></button>
        </div>
        <div className="header-image">
            <img  className="drop-animation" src={assets.profile} alt="" />
        </div>
        </div>
  )
}

export default Header
