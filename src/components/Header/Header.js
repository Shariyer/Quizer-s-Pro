import React from 'react';
import './Header.css'
import { PuzzlePieceIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-header-name'>
                <h2>Quizer'S Pro<PuzzlePieceIcon className="icon"/></h2>
                
            </div>
            <div className='nav-links'>
                <NavLink className={({isActive})=> isActive ? 'active':undefined} to={'/'}>Home</NavLink>
                <NavLink  to={'/quizes'}>Quizes</NavLink>
                <NavLink  to={'/statistics'}>Statistics</NavLink>
                <NavLink  to={'/blog'}>Blog</NavLink>
                
            </div>
        </nav>
    );
};

export default Header;