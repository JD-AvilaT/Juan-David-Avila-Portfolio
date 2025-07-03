import './ExperienceSection.css';
import { ExperienceItem } from '../index';  

export function ExperienceSection({uid}){
    return(
        <section className='experience-section' id={uid}>
            <div className='experience-title'>
                    <h1 className='experience-title-1'>My Work</h1>
                    <h1 className='experience-title-2'>Experience</h1>
            </div>
            <div className='experiences'>
                <ExperienceItem brandName='UXLab' startDate='Apr 2025' finishDate='Present' jobTitle='UI | UX designer' jobDescription='Design of user interfaces combining visual design with user-centered research and strategies to create functional, clear, and efficient digital experiences.'/>
                <ExperienceItem brandName='Immersi' startDate='Sep 2022' finishDate='Present' jobTitle='Community manager' jobDescription='Manage social media for multiple clients, including hotels in various cities across Colombia.'/>
                <ExperienceItem brandName='INNLab' startDate='Feb 2025' finishDate='Apr 2025' jobTitle='UI designer & FrontEnd Developer' jobDescription='Design and development intuitive interfaces for an innovation measurement tool and a recommendation system powered by AI using Figma.'/>
                <ExperienceItem brandName='Bancoldex' startDate='Sep 2024' finishDate='Dec 2024' jobTitle='UI | UX designer'jobDescription='Designed optimized and accessible interfaces in Figma, focusing on usability and visual identity.'/>
                <ExperienceItem brandName='TEApoyamos' startDate='Mar 2023' finishDate='Jun 2023' jobTitle='FrontEnd developer' jobDescription='Implemented an intuitive and accessible interface aligned with the organization’s visual identity.'/>
            </div>
        </section>
    )
}