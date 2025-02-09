import React from 'react'
import "../../Styles/Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <h3>All rights reserved © Deepak Yadav</h3>
                <div className='social-icons'>
                    <a href="#" className="icon"><FaFacebookF /></a>
                    <a href="#" className="icon"><FaTwitter /></a>
                    <a href="#" className="icon"><FaInstagram /></a>
                    <a href="#" className="icon"><FaLinkedinIn /></a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
