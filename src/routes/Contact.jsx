import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroClone from '../components/HeroClone'

const Contact = () => {
  const texts = "Let's have a chat"
  return (
    <>
      <Navbar/>
      <HeroClone heading = "Contact Me" text = {texts}/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact