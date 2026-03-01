import React from 'react'
import ThemeToggle from './ThemeToggle'
import StarBackground from './StarBackground'
import NavBar from './NavBar'
import Herosection from './Herosection'
import AboutSection from './AboutSection'
import Skillssection from './Skillssection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       <ThemeToggle/>
        <StarBackground/>
        <NavBar/>
        <main>
          <Herosection/>
           <AboutSection/>
           <Skillssection/>
           <ProjectSection/>
           <ContactSection/>
          
          
          
        </main>
         <Footer/>
        
      
      
    </div>
  )
}

export default Home
