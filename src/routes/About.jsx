import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutImg from '../components/AboutImg'
import AboutContent from '../components/AboutContent'

const About = () => {
  const texts = ""
  return (
    <>
      <Navbar/>
      <AboutImg heading = "" text = {texts}/>
      <AboutContent/>
      <Footer/>
    </>
  )
}

export default About