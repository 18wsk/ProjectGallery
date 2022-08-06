import React from 'react'
import ParticlesBg from 'particles-bg'
import MyImage from '../assets/will_pfp.jpg';
import TopNavigation  from '../components/topNavigation'
import '../styles/will_styles.css'

function Willprofile() {
    return (
        <>
        <TopNavigation/>
        <div className="background">
            <div className="griddy">
                    <div className='selection'>
                        <img className="circleprofile" src={MyImage}  alt="..." width="300" height="300" />
                        <div className="section">
                            <h1 className="name">William Kennedy</h1>
                        </div>
                    </div>
                    <div className='text-section'>
                        <div className="text-griddy">
                            <div>
                                <p>About me</p>
                            </div>
                            <div className="ineedspace">
                                <p className="ppad">I am an energetic and passionate Computer Engineering student who is in their fifth year of computer engineering at Queen's University and is eagerly looking 
                                    to apply my knowledge from both school and independent learning in a professional setting.
                                </p>
                            </div>
                            <div>
                                <p>Hobbies:</p>
                            </div>
                            <div className="ineedspace">
                                <p className=""> Sports - specifically basketball, football and rugby </p>
                                <p className=""> Competitive Esports - 4th in UPlay Canada tournament 2020, </p>
                                <p className=""> Fitness and Board games.</p>
                            </div>
                            <div>
                                <p>Socials:</p>
                            </div>
                            <div className="ineedspace">
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
        <ParticlesBg color="#c603fc" num={300} type="cobweb" bg={true} />
        </>
    )
}
export default Willprofile