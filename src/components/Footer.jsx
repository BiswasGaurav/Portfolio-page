import React from 'react'
import { Link } from 'react-router-dom'
import './FooterStyles.css'
import { FaGithub, FaHome , FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={30} style={{color:'#fff' , marginRight: '2rem', marginTop : '2px'}}/>
                    <div>
                        <p>
                            Bongaon-Helencha road , Dharmapukuria , Bongaon , West Bengal , India.
                        </p>
                        <p>743235</p>
                    </div>
                </div>

                <div className="phone" style={{display:'flex'}}>
                    <FaPhone size={20} style={{color:'#fff' , marginRight: '2rem'}}/>
                    <h4>+91 9832179104</h4>
                </div>

                <div className="email" style={{display:'flex'}}>
                    <FaMailBulk size={20} style={{color:'#fff' , marginRight: '2rem'}}/>
                    <h4>jitugauravb@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4 style={{paddingBottom : '6px'}}>About Me</h4>
                <p>Hey ! This is me Gaurav , Nice to meet you I am an web-dev enthusiast and a student who thrives to learn new things on a day-to-day basis</p>
                <div className="social">
                    <Link to = "https://github.com/BiswasGaurav" target='_blank'>
                    <FaGithub size={30} style={{color:'#fff' , marginRight: '1rem'}}/>
                    </Link>
                    <Link to="https://www.instagram.com/jitu_biswas__/" target='_blank'>
                    <FaInstagram size={30} style={{color:'#fff' , marginRight: '1rem'}}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/gaurav-biswas-535973257/" target='_blank'>
                    <FaLinkedin size={30} style={{color:'#fff' , marginRight: '1rem'}}/>
                    </Link>
                    <Link to="https://x.com/virtue2204" target='_blank'>
                    <FaTwitter size={30} style={{color:'#fff' , marginRight: '1rem'}}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer