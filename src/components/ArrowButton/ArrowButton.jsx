import './ArrowButton.css';

export function ArrowButton({ onClick, icon: Icon, link}) {
    return(
        <a href={link}>
            <button onClick={onClick} className='arrow-button'>
                {Icon && <Icon className="arrow-button-icon" />}
            </button>
        </a>
    )
}