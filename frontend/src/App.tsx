import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ContactFooter from './components/ContactFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main>
        <div className='home-section'>
          Jack Criminger
        </div>
        <div className='about-section'>
          About
        </div>
        <div className='skills-section'>
          Skills
        </div>
        <div className='projects-section'>
          Projects
        </div>
        <div className='contact-section'>
          Contact
        </div>
      </main>
      <ContactFooter />
    </div>
  )
}

export default App
