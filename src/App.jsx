import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <div className="container">
      <Title  subTitle = "Our PROGRAM" title ="What We Offer"/>
     <Programs />
     <About />
     </div>
     
    </div>
  )
}

export default App