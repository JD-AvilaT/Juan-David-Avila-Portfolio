import './Navbar.css';
import Logo from '../../../public/icons/logo.svg?react';
import { useEffect, useState } from 'react';
import { ToggleTheme } from'../index';

export function Navbar(){
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const sections = document.querySelectorAll('section[id]');
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
    
      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }, []);

    return(
        <header>
            <div className='navbar-logo'>
                <a href="">
                    <Logo className='navbar-logo-svg' alt='Logo'/>
                </a>
            </div>
            <nav className='navbar-links'>
                <ul>
                    <li><a className={activeSection === 'home' ? 'active' : ''}href="#home">Home</a></li>
                    <li><a className={activeSection === 'aboutme' ? 'active' : ''}href="#aboutme">About me</a></li>
                    <li><a className={activeSection === 'portfolio' ? 'active' : ''}href="#portfolio">Projects</a></li>
                    <li><a className={activeSection === 'experience' ? 'active' : ''}href="#experience">Experience</a></li>
                </ul>
            </nav>
            <div className='navbar-left'>
              <div className="navbar-profile">
                  <img src="/images/me-img.webp"/>
              </div>
              <ToggleTheme/>
            </div>
        </header>
    )
}