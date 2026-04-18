import { useState, useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './App.css'
import Navbar from './components/Navbar'
import ContactFooter from './components/ContactFooter'
import headshot from './assets/jackheadshot.jpeg'


function App() {
  const [count, setCount] = useState(0)
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full-Stack Developer', 'React.js Builder', 'Software Designer'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      backDelay: 1500,
    })

    return () => typed.destroy()
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <div id="home" className='home-section'>
          <div>
            <div className='home-text'>
              <h1 className='name-text'>I'm Jack</h1>
              <h1>
                A <span className='typed-text' ref={typedRef}></span>
              </h1>
            </div>
            <img src={headshot} alt="Jack Criminger" className='headshot'/>
          </div>
        </div>
        <div id="about" className='about-section'>
          <h1>
            /* About */
          </h1>
        </div>
        <div id="skills" className='skills-section'>
          <h1>
            /* Skills */
          </h1>
        </div>
        <div id="projects" className='projects-section'>
          <h1>
            /* Projects */
          </h1>
        </div>
        <div id="contact" className='contact-section'>
          <h1>
            /* Contact */
          </h1>
        </div>
      </main>
      <ContactFooter />
    </div>
  )
}

export default App
