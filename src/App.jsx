import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <div className="container">
      <Title  subTitle = "Our PROGRAM" title ="What We Offer"/>
     <Programs />
     <About />
     <Title  subTitle = "Gallery" title ="Campus Photos"/>
     <Campus />
     <Title  subTitle = "Testimonials" title ="What Student's Say"/>
     <Testimonials  />
     <Title  subTitle = "Contact Us" title ="Get in touch"/>
     <Contact />
     </div>
     
    </div>
  )
}

export default App