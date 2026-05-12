import { useState, useEffect, useRef } from 'react'
import Typed from 'typed.js'
import 'devicon/devicon.min.css'
import './App.css'
import Navbar from './components/Navbar'
import ContactFooter from './components/ContactFooter'
import headshot from './assets/jackheadshot.jpeg'
import claudeCodeIcon from './assets/claudecode-icon.png'
import VscCode from './assets/vscode-icon.png'
import pythonIcon from './assets/python-icon.png'
import cIcon from './assets/c-icon.png'

type Skill = {
  name: string,
  icon: string,
  isImage?: boolean
}
function App() {
  const typedRef = useRef(null)

  const skillsData = {
    frontend: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
    ],
    backend: [
      { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      { name: 'Express.js', icon: 'devicon-express-original colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
    ],
    languages: [
      { name: 'Python', icon: pythonIcon, isImage: true },
      { name: 'C', icon: cIcon, isImage: true },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    ],
    tools: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original colored' },
      { name: 'Claude Code', icon: claudeCodeIcon, isImage: true },
      { name: 'VSCode', icon: VscCode, isImage: true },
      { name: 'XCode', icon: 'devicon-xcode-plain colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
    ]
  }

  const SkillIcon = ({ skill }: { skill: Skill }) => {
    if (skill.isImage) {
      return <img src={skill.icon} alt={skill.name} className="skill-icon" />
    }
    return <i className={`${skill.icon} skill-icon`}></i>
  }

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
              <h1 className='name-text'>Hi, I'm Jack</h1>
              <h1>
                A <span className='typed-text' ref={typedRef}></span>
              </h1>
            </div>
            <img src={headshot} alt="Jack Criminger" className='headshot'/>
          </div>
        </div>
        <div id="about" className='about-section'>
          <h1>/* About */</h1>
          <div className='about-container'>
            <img src={headshot} alt="Dev Icon" className='dev-icon'/>
            <div className='about-info'>
              <h2>A Software Developer</h2>
              <text>Blah blah blah</text>
            </div>
          </div>
        </div>
        <div id="skills" className='skills-section'>
          <h1>/* Skills */</h1>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className='skill-category'>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className='skill-grid'>
                {skills.map(skill => (
                  <div key={skill.name} className="skill-item" title={skill.name}>
                    <SkillIcon skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
