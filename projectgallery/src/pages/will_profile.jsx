import React from 'react'
import MyImage from '../assets/will_pfp.jpg';
import TopNavigation  from '../components/topNavigation'
import '../styles/will_styles.css'
import BackgroundParticles from '../components/backgroundParticles';
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai';
import queens from '../assets/queens.jpg';
import hobbies from '../assets/hobbies.jpg';

function Home() {
    
    return (
        <>
        <TopNavigation/>
        <BackgroundParticles/>
        <div className='container'>
            <div className="section" id="Home">
                <div className='sub_section'>
                    <div className='sub_section'>
                        <img className="circleprofile" src={MyImage}  alt="..." width="400" height="400"/>
                    </div>
                    <div className="sub_section">
                        <h1 className="name" >William Kennedy</h1>
                        <h3 className="name">Engineering Student and Future Fullstack Developer</h3>
                        <div className="socials-container">
                            <div className="socials-grid">
                                <div className='socials-container'>
                                    <button className='linkeden'><a href="https://www.linkedin.com/in/william-kennedy-0a917319b/" target="_blank" rel="noreferrer"><FaLinkedinIn size="30px" color="white"/></a></button>
                                </div>
                                <div className='socials-container'>
                                    <button className='github'><a href="https://github.com/18wsk" target="_blank" rel="noreferrer"><AiFillGithub size="30px" color="black"/></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section" id="About">
                <p className='section_title'>ABOUT</p>
                <div className='about_images'>
                    <img className='queens_logo' src={queens} alt="..." width="400" height="400"/>
                    <img className='queens_logo' src={hobbies} alt="..."  width="400" height="400"/>
                    <img className='queens_logo' src={queens} alt="..."  width="400" height="400"/>
                </div>
            </div>
            <div className="section" id="Skills">
                <p className='section_title'>Skills</p>
            </div>
            <div className="section" id="Experience">
            <p className='section_title'>Experience</p>
                <div className="work_section">
                </div>
            </div>
        </div>
        </>
    )
}
export default Home
