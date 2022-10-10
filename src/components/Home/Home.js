import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <img src="quiz-cover.jpg" alt="" />
            
            <div className='home-texts'>
                <h1 className='home-text-header'>Welcome To Quizer'S Pro</h1>
                <p className='home-text-details'>Shine your knowledge by participating on online Quiz. Select your Quiz <Link to='/topic'>Topic</Link>  from menu-bar and prepare your self for bigger challenges. Happy Quizes!! Good Luck!!</p>
            </div>

           
            
        </div>
    );
};

export default Home;