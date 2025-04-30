import './Carrousel.css';
import { ToolItem } from '../index';
import VSCode from '../../../public/icons/vscode.svg?react';
import JavaScript from '../../../public/icons/javaScript.svg?react';
import TypeScript from '../../../public/icons/typeScript.svg?react';
import React from '../../../public/icons/react.svg?react';
import Figma from '../../../public/icons/figma.svg?react';
import Html from '../../../public/icons/html.svg?react';
import Css from '../../../public/icons/css.svg?react';

export function Carrousel() {
    return(
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
    )
}