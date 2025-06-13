import { useState, useRef } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
// import './icon.css'; // your custom styles

const DarkModeToggle = ({className}) => {
  const [mode, setMode] = useState("light")
  const iconRef = useRef(null);

  const toggleDarkMode = () => {
    document.body.classList.toggle('darkmode');
    iconRef.current.classList.add('animated');

    console.log(mode)

if (mode == "light") {
      setMode("dark")
      document.documentElement.style.setProperty('--main-bg', '#18181b');
      document.documentElement.style.setProperty('--text-color', '#FFFFFF');
      document.documentElement.style.setProperty('--icon-color', '#FFFFFF');
      document.documentElement.style.setProperty('--nav-bg', 'rgba(0,0,0,0.5)');
      document.documentElement.style.setProperty('--box-bg', '#1e1e1e');
      document.documentElement.style.setProperty('--shadow', 'rgba(255,255,255,0.1)');
    }
    else {
      setMode("light")
      document.documentElement.style.setProperty('--main-bg', '#f9fafb');
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--icon-color', '#ffc841');
      document.documentElement.style.setProperty('--nav-bg', 'rgba(255,255,255,0.5)');
      document.documentElement.style.setProperty('--box-bg', '#FFFF');
      document.documentElement.style.setProperty('--shadow', 'rgba(0,0,0,0.1)');
    }

    setTimeout(() => {
      iconRef.current.classList.remove('animated');
    }, 500);
  };

  return (
    <div className={className} onClick={toggleDarkMode}>
      <div className="btn__indicator">
        <div className="btn__icon-container">
          <i className="btn__icon" ref={iconRef}>
            {mode == "light" ? <FaSun /> : <FaMoon />}
          </i>
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
