import './ContactFooter.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'

const ContactFooter = () => {
    const links = [
        { icon: FaGithub, url: 'https://github.com/JCrim828', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jack-criminger/', label: 'LinkedIn'},
        { icon: FaEnvelope, url: 'mailto:jack.crim828@gmail.com', label: 'Email'},
        { icon: FaFilePdf, url: "/resume.pdf", label: 'Resume'},
    ]

    return (
        <div className='footer'>
            <div className='social-links'>
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.url}
                        target={link.url.startsWith('mailto') ? undefined : '_blank'}
                        rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        aria-label={link.label}
                        className='social-icon'
                    >
                        <link.icon />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ContactFooter
