import './PortfolioSection.css';
import { useState } from 'react';
import { ArrowButton, Tag } from '../index';
import ArrowLeft from '../../../public/icons/arrow-left.svg?react';
import ArrowRight from '../../../public/icons/arrow-right.svg?react';
import ArrowLink from '../../../public/icons/arrow-link.svg?react';

const projects = [
    {
        title: 'Conecta Digital : Bancoldex',
        description:'Conecta Digital is Bancoldex’s platform that supports entrepreneurs with financial tools and educational resources.  Our challenges is to redesign it to deliver a modern, functional and engaging experience tailored to the needs of SMEs in the digital era.',
        img: '/images/conecta-img.webp',
        img2: '/images/conecta-img2.webp',
        tag1: 'UI design',
        tag2: 'UX design',
        link:'https://www.behance.net/gallery/213372503/Conecta-Digital-UX-UI'
    },
    {
        title: 'TEApoyamos',
        description: 'This work is based on a collaborative project carried out by a design class of ICESI Universty, wich was challenged to work with the TEApoyamos Foundation (a foundation for individuals with autism spectrum disorders) to offer their design expertise and collaborate on creating a proposal that can help the foundation and its affiliates.',
        img: '/images/teapoyamos-img.webp',
        img2: '/images/teapoyamos-img2.webp',
        tag1: 'UI | UX design',
        tag2: 'FrontEnd development',
        link:'https://www.behance.net/gallery/172971959/TEApoyamos'
    },
    {
        title: 'Zone',
        description: 'Zone is an app designed to help users enroll in recreational activities, recommending options based on their interests and proximity to their location. Perfect for ensuring your kids learn and enjoy new experiences.',
        img: '/images/zone-img.webp',
        img2: '/images/zone-img2.webp',
        tag1: 'UX design',
        tag2: 'UI design',
        link:'https://www.behance.net/gallery/183054175/Sports-App-UXUI-Case-Study'
    },
    {
        title: 'Mourse',
        description: 'Developing a system for effective Morse code learning, based on constant repetition and periodic assesment. It utilizes an intuitive three-button controller that allows the user to generate Morse code, as well as confirm inputs. The approach focuses on repetitive practice sessions combined with regular assessments to measure progress and reiforce weak areas.',
        img: '/images/mourse-img.webp',
        img2: '/images/mourse-img2.webp',
        tag1: 'UX design',
        tag2: 'UI design',
        link:'https://www.behance.net/gallery/197905511/MOURSE-UX-CASE'
      },
];

export function PortfolioSection({uid}) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);

    const handleNext = () => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
            setIsExiting(false);
            setIsAnimating(true);
        }, 500);
    };
    
    const handlePrevious = () => {
        setIsExiting(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
            setIsExiting(false);
            setIsAnimating(true);
        }, 500);
    };

    const currentProject = projects[currentProjectIndex];

    return (
        <section className='portfolio-section' id={uid}>
            <div className='portfolio-title'>
                    <h1 className='portfolio-title-1'>MY</h1>
                    <h1 className='portfolio-title-2'>PORTFOLIO</h1>
            </div>
            <div className='portfolio-div'>
                <ArrowButton onClick={handlePrevious} icon={ArrowLeft} />
                <div className={`project ${isAnimating ? 'fade-in' : ''} ${isExiting ? 'fade-out' : ''}`}>
                    <div className="project-imgs">
                        <img src={currentProject.img} alt={currentProject.title} />
                        <img src={currentProject.img2} alt={currentProject.title} />
                    </div>
                    <div className='tags'>
                        <Tag text={currentProject.tag1} />
                        <Tag text={currentProject.tag2} />
                    </div>
                    <div className='title'>
                        <h2>{currentProject.title}</h2>
                        <ArrowButton icon={ArrowLink} link={currentProject.link} />
                    </div>
                    <p>{currentProject.description}</p>
                </div>
                <ArrowButton onClick={handleNext} icon={ArrowRight} />
            </div>
        </section>
    );
}
