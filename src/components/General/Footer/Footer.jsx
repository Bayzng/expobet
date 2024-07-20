import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import appleStore from "../../../assets/apple.jpeg"
import playStore from "../../../assets/googlePlay.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='--Footer-Content'>
        <div className='--Footer-Info'>
          <h3>HOME</h3>
          <h3>EXPERT TIPS</h3>
          <h3>ABOUT US</h3>
          <h3>FAQS</h3>
        </div>
        <div>
          <div className='--Footer-Icon'>
            <h3><FaXTwitter /></h3>
            <h3><FaFacebookF color='blue' /></h3>
            <h3><FaInstagram color='red' /></h3>
            <h3><FaTelegramPlane color='blue' /></h3>
          </div>
        </div>
        <div className='Footer-Soon'>
          <h4>Coming Soon</h4>
        </div>
        <div className='--Footer-Download'>
          <img src={appleStore} alt="" />
          <img src={playStore} alt="" />
        </div>
        <div className='--Footer-Last'>
          <p>Copyright &copy; Expobet 2021 || All rights reserved.</p>
          <p>Powered By: Lunatech Global Resources.</p>
          <p>18+ Gamble Responsibly.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer