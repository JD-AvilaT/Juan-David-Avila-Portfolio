import './ExperienceItem.css';

export function ExperienceItem({ brandName, startDate, finishDate, jobTitle, jobDescription }) {
    return(
        <div className='experience-item'>
            <div className='experience-left'>
                <p className='experience-brand-name'>
                    {brandName}
                </p>
                <div className='experience-date'>
                    <p>
                        {startDate}
                    </p>
                    <p>
                        -
                    </p>
                    <p>
                        {finishDate}
                    </p>
                </div>
            </div>
            <div className="experience-right">
                <p className='experience-job-title'>
                    {jobTitle}
                </p>
                <p className='experience-job-description'>
                    {jobDescription}
                </p>
            </div>
        </div>
    )
}