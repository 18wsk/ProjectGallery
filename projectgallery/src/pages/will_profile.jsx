import React from 'react'
import ParticlesBg from 'particles-bg'
import MyImage from '../assets/will_pfp.jpg';

function Willprofile() {
    return (
        <>
        <div className="w-full h-screen">
            <div className="flex items-center justify-center h-screen">
                <div className="border-4 border-slate-800">
                    <img src={MyImage}  alt="..." width="200" height="200" className="rounded"/>
                </div>
            </div>
        </div>
        <ParticlesBg color="#c603fc" num={300} type="cobweb" bg={true} />
        </>
    )
}

export default Willprofile