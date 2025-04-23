import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education for a better World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam iste, amet, est non impedit ut voluptate libero asperiores sit dignissimos placeat magni quasi vitae quidem. Rerum odio quam molestiae.</p>
            <div className="btn">Explore More <img src = {dark_arrow} alt="" /> </div>
        </div>
    </div>
  )
}

export default Hero