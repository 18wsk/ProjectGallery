import React from 'react'
import ParticlesBg from 'particles-bg'
import MyImage from '../assets/will_pfp.jpg';
import TopNavigation  from '../components/topNavigation'

function Willprofile() {
    return (
        <>
        <head>
            <link rel={'stylesheet'} href={'index.css'}/>
        </head>
        <div className="w-full h-screen">
            <TopNavigation/>
            <div className="flex items-center justify-center h-screen">
                    <div >
                        <img className="rounded-full border-4" src={MyImage}  alt="..." width="200" height="200" />
                    </div>
            </div>
        </div>
            <ParticlesBg color="#c603fc" num={300} type="cobweb" bg={true} />
        </>
    )
}
export default Willprofile