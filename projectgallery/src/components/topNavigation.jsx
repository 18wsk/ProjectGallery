import React from 'react'
import '../styles/navbar_styles.css'

export default function TopNavigation() {
  return (
    <div className='navbar'>
        <a className='btn' href="#Home">Home</a>
        <a className='btn' href="#About">About</a>
        <a className='btn' href="#Skills">Skills</a>
        <a className='btn' href="#Experience">Experience</a>
        <a className='btn' href="#Contact">Contact</a>
    </div>
  )
}
