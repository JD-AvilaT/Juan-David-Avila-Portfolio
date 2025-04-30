import './AboutMeSection.css';
import { ProfileCard, Button, Tag } from '../index';
import LinkedIn from '../../../public/icons/linkedin.svg?react';
import Instagram from '../../../public/icons/instagram.svg?react';
import Logo from '../../../public/icons/logo.svg?react';

export function AboutMeSection( {uid} ) {
    return(
        <section id={uid} className="about-me-section">
            <div className='about-me-up'>
                <div className='about-me-up-title'>
                    <h1 className='title-1'>ABOUT</h1>
                    <h1 className='title-2'>ME</h1>
                </div>
                <Logo className='logo'/>
            </div>
            <div className='about-me-down'>
                <ProfileCard  label='Interactive media designer' variant="about-me-card" showButton={false} showLabel={true} variantImg="about-me-card"/>
                <div className='about-me-down-description'>
                    <p>
                    {"Hi! I'm Juan David Ávila Tamayo, a 21-year-old Interactive Media Design student at ICESI University. I’m passionate about UI/UX design, focused on creating intuitive, functional, and visually appealing digital experiences."}</p>
                    <p>
                        {" While my main focus is on design, I also work with front-end development to bring interfaces to life, ensuring a seamless connection between design and functionality. "}
                    </p>
                    <p>
                    {"Currently, I’m strengthening my skills in Figma, working on design systems and interactive prototypes, always aiming to transform ideas into meaningful and engaging user experiences."}
                    </p>
                    <div className='about-me-down-description-buttons'>
                        <Tag text="Instagram" icon={Instagram} link="https://www.instagram.com/jd_avilat/"/>
                        <Tag text="Linked In" icon={LinkedIn} link="https://www.linkedin.com/in/juandavidavilat/"/>
                    </div>
                </div>
            </div>
        </section>
    )
}