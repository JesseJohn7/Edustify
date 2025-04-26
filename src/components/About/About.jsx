import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src = {about_img} alt="" className='about_img' />
            <img src= {play_icon} alt="" className='play_icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leader's Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum, corporis laboriosam veniam, dolorem quas quidem eos natus animi, id laborum error optio facere! Et tempore autem reprehenderit eius animi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut laborum inventore sunt consectetur? Deleniti atque in ipsum omnis eos enim illum voluptatum quo, quis odio, reiciendis impedit vitae id!</p>
        </div>
    </div>
  )
}

export default About