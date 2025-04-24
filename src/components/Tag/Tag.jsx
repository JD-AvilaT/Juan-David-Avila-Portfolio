import './Tag.css';

export function Tag({ text, icon: Icon, showIcon = true, link  }) {
    return(
        <a className="tag" href={link}>
            {showIcon && Icon && <Icon className="tag__icon" />}
            <span>{text}</span>
        </a>
    )
}