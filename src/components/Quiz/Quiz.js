import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ data }) => {
    console.log(data)
    

    return (
        <div className='quizes-container'>
            <div className='quiz-container'>
                <div>
                    <img src={data.logo} alt="" />

                </div>
                <div className='quizes-details'>
                    <h3>{data.name}</h3>
                    <p>Total Quiz Question:{data.total}</p>
                    <button className='start-btn'><Link to={`/quizes/${data.id}`}>Start Quiz</Link></button>
                    
                </div>

            </div>

        </div>
    );
};

export default Quiz;