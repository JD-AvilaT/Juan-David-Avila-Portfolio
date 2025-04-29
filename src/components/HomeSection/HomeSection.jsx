import './HomeSection.css';
import { Tag, ProfileCard, ToolItem } from '../index';
import DownloadIcon from '../../../public/icons/download.svg?react';
import LinkedIn from '../../../public/icons/linkedin.svg?react';
import Behance from '../../../public/icons/behance.svg?react';
import VSCode from '../../../public/icons/vscode.svg?react';
import JavaScript from '../../../public/icons/javaScript.svg?react';
import TypeScript from '../../../public/icons/typeScript.svg?react';
import React from '../../../public/icons/react.svg?react';
import Figma from '../../../public/icons/figma.svg?react';
import Html from '../../../public/icons/html.svg?react';
import Css from '../../../public/icons/css.svg?react';

export function HomeSection({uid}) {
    return(
        <section className="home-section" id={uid}>
            <div className='title'>
                <div className='title-tags'>
                    <Tag text="UI|UX designer"/>
                    <Tag text="FrontEnd developer"/>
                </div>
                <h1>JUAN DAVID AVILA T</h1>
            </div>
            <div className='description'>
                <ProfileCard showLabel={true} showButton={true}/>
                <div className='description-tags'>
                    <Tag showIcon={true} icon={DownloadIcon} text="Download my CV" link="../../../public/cv/CurriculumVitae-english.pdf"/>
                    <Tag showIcon={true} icon={LinkedIn} text="See my LinkedIn" link="https://www.linkedin.com/in/juandavidavilat/"/>
                    <Tag showIcon={true} icon={Behance} text="See my Behance" link="https://www.behance.net/4e077981"/>
                </div>
            </div>
            <div className="tools">
                <div className='tools-wrapper'>
                    <ToolItem icon={VSCode} text="Visual SC"/>
                    <ToolItem icon={JavaScript} text="JavaScript"/>
                    <ToolItem icon={TypeScript} text="TypeScript"/>
                    <ToolItem icon={Css} text="CSS"/>
                    <ToolItem icon={React} text="React JS"/>
                    <ToolItem icon={Figma} text="Figma"/>
                    <ToolItem icon={Html} text="HTML"/>
                </div>
                <div className='tools-wrapper'>
                    <ToolItem icon={VSCode} text="Visual SC"/>
                    <ToolItem icon={JavaScript} text="JavaScript"/>
                    <ToolItem icon={TypeScript} text="TypeScript"/>
                    <ToolItem icon={Css} text="CSS"/>
                    <ToolItem icon={React} text="React JS"/>
                    <ToolItem icon={Figma} text="Figma"/>
                    <ToolItem icon={Html} text="HTML"/>
                </div>
            </div>
        </section>
    )
}
