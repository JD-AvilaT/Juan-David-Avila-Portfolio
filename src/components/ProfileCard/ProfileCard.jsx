import './ProfileCard.css';
import { Button } from '../index';

export function ProfileCard({ showLabel = true, showButton = true, variantImg }) {
    return(
        <div className="profile-card">
            {showLabel && <div className='profile-card-label'>
                <p>ICESI University</p>
            </div>}
            <div className={`profile-card-content ${variantImg}`}>
                {showButton && <Button text="Interactive media designer"/>}
            </div>
        </div>
    )
}
