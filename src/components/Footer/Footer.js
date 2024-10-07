import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
  const handleClick = () => {
    window.scrollTo(0,0);
  }
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer-box'>
            <div className='logo'>
              <div className='logo-img'>
                <img src={footer} alt='' />
              </div>
              <h2>TechFlix AI</h2>
            </div>
            <p>
              Embrace the future of innovation and technology with our cutting-edge tech business solutions.
            </p>
          </div>
          <div className='footer_box'>
            <h4 className='footer_title'>Combany</h4>
            <ul className='footer_links'>
              <li><Link to='/courses' onClick={handleClick}>Our programs</Link></li>
              <li><Link to='/services' onClick={handleClick}>Our plan</Link></li>
              <li><Link to='/member'>Became a member</Link></li>
            </ul>
          </div>
          <div className='footer_box'>
            <h4 className='footer_title'>Quick Links</h4>
            <ul className='footer_links'>
              <li><Link to='/aboutus' onClick={handleClick}>About Us</Link></li>
              <li><Link to='/contactus' onClick={handleClick}>Contact Us</Link></li>
                <li><Link to='/support'>Support Us</Link></li>
              </ul>
              </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
