import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './Questions.css'

const Question = () => {
    const loadedQuestions = useLoaderData()
    
    
    return (
        <div>
            
            {
                loadedQuestions.data.questions.map(question => <SingleQuestion
                    question={question}
                    key={question.id}
                ></SingleQuestion>)  
            }
        </div>
    );
};

export default Question;