import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Creator</h3>
          <p className='text-muted-foreground '>
            I enjoy building complete web solutions—whether it’s crafting smooth and responsive frontends with React,
             developing powerful backends with Node.js & Express, or managing databases with MongoDB.

            Alongside the MERN stack, I also have a strong foundation in Java , 
             which gives me the flexibility to work with different technologies and adapt to project requirements.
              </p>
               <p className='text-muted-foreground'>
            I’m passionate about solving real-world problems through technology, 
             writing clean and maintainable code, and constantly learning new tools to improve my craft.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
            <a href='#contact' className='cosmic-button'>
              {" "}
              Get In Touch
            </a>

            <a href='' className=' px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
              Download Resume
            </a>


          </div>

        </div>
        
        <div className='grid grid-cols-1 gap-6'>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>

                  <Code className='h-6 w-6 text-primary'/>

              </div>
              <div className='text-left'>
                <h4 className='font-semibold text-lg'>  Web Development</h4>
                <p>Creating responsive websites and web application with modern frameworks.</p>
              </div>

            </div>

          </div>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>

                  <User className='h-6 w-6 text-primary'/>
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                    <p className='text-muted-foreground'>
                      Designing intuitive user interfaces and seamless user experiences.
                    </p>

                  

              </div>
              

            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>

                  <Briefcase className='h-6 w-6 text-primary'/>

              </div>
               <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Project Management</h4>
                    <p className='text-muted-foreground'>
                      Leading projects from conception to completion with agile methodologies.
                    </p>

                  

              </div>

            </div>
          </div>

        </div>

      </div>
      </div>

    </section>
    
  )
}

export default AboutSection
