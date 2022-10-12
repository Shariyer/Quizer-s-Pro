import React from 'react';
import Option from '../Option/Option';
import './SingleQuestion.css'
import { EyeIcon } from '@heroicons/react/24/solid'


const SingleQuestion = ({question}) => {
    
   

    const handleCorrectAns = (question) => {
       
        const correctAnswer = question.correctAnswer;
        alert(correctAnswer);
          
    }
    
    return (
        <div className='questions-container'>
            <div className='question-header'>
                <h2>{question.question}
                    <EyeIcon onClick={() => { handleCorrectAns(question) }} title='click to see Correct answer' className='eye-icon'></EyeIcon>
                </h2> 
            </div>
            <div>
                {
                    question.options.map(option=><Option option={option} question={question}  ></Option>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;