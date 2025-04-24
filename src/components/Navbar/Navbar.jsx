import './Navbar.css';
import Logo from '../../assets/icons/logo.svg?react';
import { useEffect, useState } from 'react';

export function Navbar(){
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
    
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            threshold: 0.5,
          }
        );
    
        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
      }, []);

    return(
        <header>
            <div className='navbar-logo'>
                <a href="">
                    <Logo className='logo' alt='Logo'/>
                </a>
            </div>
            <nav className='navbar-links'>
                <ul>
                    <li><a className={activeSection === '' ? 'active' : ''}href="">Home</a></li>
                    <li><a className={activeSection === '' ? 'active' : ''}href="">About me</a></li>
                    <li><a className={activeSection === '' ? 'active' : ''}href="">Projects</a></li>
                    <li><a className={activeSection === '' ? 'active' : ''}href="">Experience</a></li>
                </ul>
            </nav>
            <div className="navbar-profile">
                <img src="src\assets\images\me-img.webp"/>
            </div>
        </header>
    )
}