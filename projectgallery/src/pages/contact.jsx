import React, { useState } from 'react';
import BackgroundParticles from '../components/backgroundParticles';
import TopNavigation  from '../components/topNavigation'
import '../styles/contact_styles.css'
import emailjs from "emailjs-com";

export default function Contact() {
    const [formInfo, setFormInfo] = useState({
        name: '',
        company: '',
        message: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(name, value)
        setFormInfo({...formInfo, [name]: value})
    }

    const sendEmail = async() => {
        emailjs.init("user_iSGIRXU__EtvcCt1z");
        await emailjs.send(
            "service_i6n83dn",
            "template_gz40fz5",
            formInfo,
            "user_iSGIRXU__EtvcCt1z"
        );
    }

    const submitForm = () => {
        sendEmail()
    }


    return (
        <div className='bg'>
            <TopNavigation/>
            <BackgroundParticles/>
            <div className="contact_container">
                <div className='contact_form_container'>
                    <p className='form_title'>Contact</p>
                    <form className='form'>
                        <label className='form_label' htmlFor='name'>Name:</label>
                        <div className='form_center'>
                            <input value={formInfo.name} onChange={handleChange} className='form_input' name='name' id='name' type='text'></input>
                        </div>
                        <br></br>
                        <label className='form_label' htmlFor='name'>Company:</label>
                        <div className='form_center'>
                            <input value={formInfo.company} onChange={handleChange} type='text' name='company' id='company' className='form_input'></input>
                        </div>
                        <br></br>
                        <label className='form_label' htmlFor='name'>Message:</label>
                        <br></br>
                        <div className='form_center'>
                            <textarea value={formInfo.message} name='message' id='message' className='form_input'onChange={handleChange} type='textarea'></textarea >
                        </div>
                        <br></br>
                        <div className='submit_container'>
                            <button onClick={() => submitForm()} type="submit" value="Submit" className='submit_button'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
