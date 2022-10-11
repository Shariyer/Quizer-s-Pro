import React from 'react';
import Option from '../Option/Option';
import './SingleQuestion.css'

const SingleQuestion = ({ question }) => {

    console.log(question)
    return (
        <div className='questions-container'>
            <div>
                <h2>{question.question}</h2>
            </div>
            <div>
                {
                    question.options.map(option=><Option option={option} ></Option>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;