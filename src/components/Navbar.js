import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css'
import '../index.css'

function Navbar() {
    // sets up dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };


    return (
        <nav className='navbar'>
            <h1 className='logo'>Laurel</h1>
            <ul className='nav-list'>
                <li><Link to="/" className='nav-item'>Home</Link></li>
                <li><Link to="/about" className='nav-item'>About</Link></li>
                <li><Link to="/projects" className='nav-item'>Projects</Link></li>
                <li><Link to="/contact" className='nav-item'>Contact</Link></li>
            </ul>
            <button className="mode" onClick={toggleDarkMode}>
                {darkMode ? '☀️' : '🌙'}
            </button>
        </nav>
    );
}

export default Navbar;