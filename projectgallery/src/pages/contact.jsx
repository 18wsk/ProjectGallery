import React from 'react'
import BackgroundParticles from '../components/backgroundParticles';
import TopNavigation  from '../components/topNavigation'
import '../styles/contact_styles.css'

export default function Contact() {
    return (
        <div class='bg'>
            <TopNavigation/>
            <BackgroundParticles/>
            <div className="contact_container">
                <div className='contact_form_container'>
                    <p className='form_title'>Contact</p>
                    <form className='form'>
                        <label for='name'>Name:</label>
                        <input name='name' id='name' type='text'></input>
                        <br></br>
                        <label for='name'>Your Company:</label>
                        <input type='text'></input>
                        <br></br>
                        <label for='name'>Message:</label>
                        <input type='textarea'></input>
                        <br></br>
                        <div className='submit_container'>
                            <button className='submit_button'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
