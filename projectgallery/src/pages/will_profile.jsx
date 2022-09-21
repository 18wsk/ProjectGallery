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
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import Rio from '../assets/Rio.jpg'

function Home() {
    
    return (
        <>
        <TopNavigation/>
        <BackgroundParticles/>
        <div className="container">
            <div className="home_section" id="Home">
                <div className='home_page'>
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
            </div>
            <div className="section" id="About">
                <p className='section_title'>ABOUT</p>
                <div className='about_grid'>
                    <div className='about_section'>
                        <button className='about_button'>
                            <IoIosSchool color='white' size='100%' position='absolute'/>
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
                            <MdOutlineSportsEsports  color='white' size='100%' position='absolute'/>
                            <h1 className='about_text'>Personal Interests: </h1>
                            <p className='about_text'>
                                My main interests revolve around physical fitness and sports such as 
                                rugby which I have been lucky enough to be a part of such great oranizations in highschool and club
                                which lead me to winning multiple provincial medals. I also enjoy various forms of media including 
                                video games in which I have also played in Competitive esports tournaments such as UPLAY sports national tournament.
                            </p>
                        </button>
                    </div>
                    <div className='about_section'>
                    <button className='about_button'>
                            <BiCodeCurly color='white' size='100%' position='absolute'/>
                            <h1 className='about_text'>Why Software Development:</h1>
                            <p className='about_text'> 
                                I am a very passionate and driven person who loves taking on new challenges which is why I chose software development.
                                This field is a great opportunity for me to apply my 'outside the box' thinking as well as my creativity to my work.
                                I hightly value the importance of teamwork and communication and find nothing more rewarding than completing a project
                                that benifits the user or helps improve the user's lives.
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="section" id="Skills">
                <p className='section_title'>Skills</p>
                <div className='graph_title_container'>
                    <div>
                        <p className='graph_title'>Hard Skills</p>
                    </div>
                    <div>
                        <p className='graph_title'>Soft Skills</p>
                    </div>
                </div>
                <div className='skills_section'>
                    <div className='skills_sub_section'>
                        <VictoryChart
                            domainPadding={{ x: [20, 20] }}
                            wdith={'100%'}
                            padding={{ left: 80, right: 20}}
                        >
                            <VictoryBar 
                                horizontal
                                data={[{ x: 'Javascript', y: 8 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'CSS', y: 6 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'SQL', y: 6 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'Python', y: 8 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'PLC Prog.', y: 7 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryAxis 
                                dependentAxis
                                tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                style={{
                                    axis: {
                                        stroke: 'white'  //CHANGE COLOR OF X-AXIS
                                    },
                                    tickLabels: {
                                        fill: 'white', //CHANGE COLOR OF X-AXIS LABELS
                                        fontSize: 10
                                    },
                                    axisLabel: {
                                        stroke: 'white',  //CHANGE COLOR OF X-AXIS
                                        fontSize: 20,
                                        padding: 35
                                    },
                                    label: {
                                        fontSize: 10
                                    }
                                }}
                                />
                            <VictoryAxis 
                                tickValues={['Javascript', 'CSS', 'SQL', 'Python', 'PLC Prog.']}
                                style={{
                                    axis: {
                                        stroke: 'white'  //CHANGE COLOR OF X-AXIS
                                    },
                                    tickLabels: {
                                        fill: 'white', //CHANGE COLOR OF X-AXIS LABELS
                                        fontSize: 10,
                                        padding: 28
                                    }, 
                                }}
                                />
                        </VictoryChart>
                    </div>
                    <div className='skills_sub_section'>
                    <VictoryChart
                            domainPadding={{ x: [20, 20] }}
                            wdith={'100%'}
                            padding={{ left: 100, right: 20}}
                        >
                            <VictoryBar 
                                horizontal
                                data={[{ x: 'Problem-solving', y: 8 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'Communication', y: 9 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'Accountability', y: 8 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'Organization', y: 7}]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryBar
                                horizontal
                                data={[{ x: 'Leadership', y: 7 }]}
                                style={{ data: { fill: "#FFFF" }, labels: { fill: "white", fontSize: 10} }}
                                barWidth={30}
                                labels={({ datum }) => datum.y}
                                labelComponent={<VictoryLabel/>}
                            />
                            <VictoryAxis 
                                dependentAxis
                                tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                style={{
                                    axis: {
                                        stroke: 'white'  //CHANGE COLOR OF X-AXIS
                                    },
                                    tickLabels: {
                                        fill: 'white', //CHANGE COLOR OF X-AXIS LABELS
                                        fontSize: 10
                                    },
                                    axisLabel: {
                                        stroke: 'white',  //CHANGE COLOR OF X-AXIS
                                        fontSize: 20,
                                        padding: 35
                                    },
                                    label: {
                                        fontSize: 10
                                    }
                                }}
                                />
                            <VictoryAxis 
                                tickValues={['Problem-solving', 'Communication', 'Accountability', 'Organization', 'Leadership']}
                                style={{
                                    axis: {
                                        stroke: 'white'  //CHANGE COLOR OF X-AXIS
                                    },
                                    tickLabels: {
                                        fill: 'white', //CHANGE COLOR OF X-AXIS LABELS
                                        fontSize: 10,
                                        padding: 28
                                    }, 
                                }}
                                />
                        </VictoryChart>
                    </div>
                </div>
            </div>
            <div className="section" id="Experience">
            <p className='section_title'>Experience</p>
                <div className="work_section">
                    <div className="work_images">
                        <div className="full">
                            <img className= 'gg' src={Rio} alt='_' width='100%' height='100%'/>
                        </div>
                        <div className="full">
                            <iframe src={'https://carbongraph.io/'} width='100%' height='100%' title='ss'/>
                            {/* <iframe src={'https://carbongraph.io/'} size={'100%'} title='ss'/> */}
                        </div>
                    </div>
                    <div className="work_images">
                        <div className="center">
                            <p className='work_text'>
                                I completed my first professional internship at Rio Tinto Aluminum smelter in Kitimat BC
                                as an automation intern. During this internship I gained great experience with problem solving
                                and consulting with industrial projects involving Programmable Logic Controlers. 
                                
                                I was also fortunate enough to redesign multiple HMI's throughout the site and configure a machine 
                                vision project using cognex explorer. The project involved classifying old annodes as re-usable or not,
                                this project overall increased productivity and lessened waste across the anode rodding shop.
                            </p>
                        </div>
                        <div className="center">
                            <p className='work_text'>
                                I currently work at CarbonGraph, a Toronto based startup that is trying to make a mark in the carbon footprint
                                mapping market. I work as the lead frontend developer, I have gained great API, AWS and web developer fundamentals.
                                
                                My latest work includes a complete overhaul of the frontend graph system that leverages openLCA open source data to 
                                help create a better user experience and more accurate carbon footprint estimates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home
