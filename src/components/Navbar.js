import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img alt="Laurel" src="../assets/logo.png" />
            </div>
            <ul className='nav-links'>
                <li><Link to="/" className='nav-item'>Home</Link></li>
                <li><Link to="/about" className='nav-item'>About</Link></li>
                <li><Link to="/projects" className='nav-item'>Projects</Link></li>
                <li><Link to="/contact" className='nav-item'>Contact</Link></li>
                <li>
                    <button onClick={toggleDarkMode} className='mode-toggle'>
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;