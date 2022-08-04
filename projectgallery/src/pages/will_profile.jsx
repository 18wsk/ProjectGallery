import React from 'react'
import ParticlesBg from 'particles-bg'
import MyImage from '../assets/will_pfp.jpg';

function Willprofile() {
    return (
        <>
            <ParticlesBg color="#c603fc" num={300} type="cobweb" bg={true} />
            <div className="flex items-center justify-center h-screen">
                <img src={MyImage}  alt="..." width="200" height="200" className="rounded"/>
                <div>hello</div>
            </div>
        </>
    )
}

export default Willprofile