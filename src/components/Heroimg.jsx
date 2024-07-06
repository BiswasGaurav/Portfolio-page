import { Link } from 'react-router-dom'
import './HeroimgStyles.css'

import React from 'react'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img'
            src='https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png' alt = "coding and coffee"/>
        </div>

        <div className='content'>
            <p>Hi, I'm a Student and a</p>
            <h1>Full Strack Developer</h1>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-lite'>Contact</Link>
        </div>
    </div>
  )
}

export default Heroimg