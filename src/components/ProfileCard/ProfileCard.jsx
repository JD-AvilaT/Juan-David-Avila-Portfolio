import './ProfileCard.css';
import { Button } from '../index';

export function ProfileCard({ showLabel = true, showButton = true, label, variantImg, variant }) {
    return(
        <div className={`profile-card ${variant}`}>
            {showLabel && <div className='profile-card-label' >
                <p>{label}</p>
            </div>}
            <div className={`profile-card-content ${variantImg}`}>
                {showButton && <Button text="Interactive media designer"/>}
            </div>
        </div>
    )
}
