import React from 'react'
import MyImage from '../assets/will_pfp.jpg';
import TopNavigation  from '../components/topNavigation'
import '../styles/will_styles.css'
import BackgroundParticles from '../components/backgroundParticles';
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai';

function Willprofile() {
    return (
        <>
        <TopNavigation/>
        <div className="background">
            <div className='section'>
                <div className='section'>
                    <img className="circleprofile" src={MyImage}  alt="..." width="300" height="300" />
                </div>
                <div className="section">
                    <h1 className="name">William Kennedy</h1>
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
        <BackgroundParticles/>
        </>
    )
}
export default Willprofile
