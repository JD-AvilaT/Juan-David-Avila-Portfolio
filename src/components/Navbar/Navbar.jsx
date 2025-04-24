import './Navbar.css';
import Logo from '../../assets/icons/logo.svg?react';

export function Navbar(){
    return(
        <header>
            <div className='navbar-logo'>
                <a href="">
                    <Logo className='logo' alt='Logo'/>
                </a>
            </div>
            <nav className='navbar-links'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About me</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Experience</a></li>
                </ul>
            </nav>
            <div className="navbar-profile">
                <img src="src\assets\images\me-img.webp"/>
            </div>
        </header>
    )
}