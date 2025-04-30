import { useEffect, useState } from 'react';
import './ToggleTheme.css';
import Moon from '/public/icons/moon.svg?react';

export function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
  
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme
      ? storedTheme === 'dark'
      : prefersDark;
  
    setIsDark(shouldUseDark);
    document.body.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.body.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="toggle-container">
      <Moon className="moon-icon" />
      <label className="toggle-theme">
        <input type="checkbox" onChange={toggleTheme} checked={isDark} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleTheme;
