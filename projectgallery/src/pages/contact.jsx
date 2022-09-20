import React from 'react'
import BackgroundParticles from '../components/backgroundParticles';
import TopNavigation  from '../components/topNavigation'
import '../styles/contact_styles.css'

export default function Contact() {
    return (
        <div class='bg'>
            <TopNavigation/>
            <BackgroundParticles/>
            <div className="container">
                <div className='gray_box'>
                    <p>Contact</p>
                    <input type='text'></input>
                    <input type='text'></input>
                    <input type='textarea'></input>
                </div>
            </div>
        </div>
    )
}
