import './HomeSection.css';
import { Tag, ProfileCard} from '../index';
import DownloadIcon from '../../../public/icons/download.svg?react';
import LinkedIn from '../../../public/icons/linkedin.svg?react';
import Behance from '../../../public/icons/behance.svg?react';

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
                <ProfileCard label='ICESI University' showLabel={true} showButton={true}/>
                <div className='description-tags'>
                    <Tag showIcon={true} icon={DownloadIcon} text="Download my CV" link="/cv/CurriculumVitae-english.pdf"/>
                    <Tag showIcon={true} icon={LinkedIn} text="See my LinkedIn" link="https://www.linkedin.com/in/juandavidavilat/"/>
                    <Tag showIcon={true} icon={Behance} text="See my Behance" link="https://www.behance.net/4e077981"/>
                </div>
            </div>
        </section>
    )
}
