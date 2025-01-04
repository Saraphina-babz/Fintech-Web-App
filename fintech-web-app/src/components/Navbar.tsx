import React, { useState } from 'react';
import './styles.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <nav className="mb-4 nav">
            <img src={logo} alt='logo' className='mr-2 logo'/>
            <h1 className='mr-10'>Finance</h1>
            <button className="toggle" onClick={toggleNavbar}>
                {isOpen ? '✖' : '☰'} 
            </button>
            <div className={`links ${isOpen ? 'open' : ''}`}>
                <Link to="/" className={`ml-6 ${isActive('/')}`}>User Overview</Link>
                <Link to="/loan-management" className={`ml-6 ${isActive('/loan-management')}`}>Loan Management</Link>
                <Link to="/transaction-history" className={`ml-6 ${isActive('/transaction-history')}`}>Transaction History</Link>
            </div>
        </nav>
    );
};

export default Navbar;
