import './Tag.css';

export function Tag({ text, icon: Icon, showIcon = true, link, variant  }) {
    return(
        <a className={`tag ${variant}`} href={link}>
            {showIcon && Icon && <Icon className="tag__icon" />}
            {text}
        </a>
    )
}