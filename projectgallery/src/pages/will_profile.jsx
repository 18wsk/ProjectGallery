import React from 'react'
import MyImage from '../assets/will_pfp.jpg';
import TopNavigation  from '../components/topNavigation'
import '../styles/will_styles.css'
import BackgroundParticles from '../components/backgroundParticles';
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai';
import { BiCodeCurly } from 'react-icons/bi';
import { IoIosSchool } from 'react-icons/io';
import { MdOutlineSportsEsports } from 'react-icons/md'

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
                <div className='about_grid'>
                    <div className='about_section'>
                        <button className='about_button'>
                            <IoIosSchool color='white' size='400px' position='absolute'/>
                            <h1 className='about_text'>Education: </h1>
                            <p className='about_text'>
                                Currently completing my fifth year 
                                at Queen's University and will graduate this spring with a BASc 
                                in Computer Engineering after successfully completing two seperate 
                                professional internships and participating in clubs such as Queen's BAJA.
                            </p>
                        </button>
                    </div>
                    <div className='about_section'>
                    <button className='about_button'>
                            <BiCodeCurly color='white' size='400px' position='absolute'/>
                            <h1 className='about_text'>Personal Interests: </h1>
                            <p className='about_text'>
                                My main interests revolve around physical fitness and sports such as 
                                rugby which I have been lucky enough to have won multiple provincial medals 
                                in. I also enjoy various forms of media including video games in which I have 
                                also played in Competitive esports tournaments such as UPLAY sports national tournament.
                            </p>
                        </button>
                    </div>
                    <div className='about_section'>
                    <button className='about_button'>
                            <MdOutlineSportsEsports color='white' size='400px' position='absolute'/>
                            <h1 className='about_text'>Why Software Development:</h1>
                            <p className='about_text'> 
                                I am a very passionate and driven person, I like to think outside the box. 
                                This why I have found such an interest in programming since it is a new challenge everyday and nothing 
                                is more rewarding that being part of a team and building a project that can leave a positive impact in peoples lives.
                            </p>
                        </button>
                    </div>
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
