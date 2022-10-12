import React from 'react';
import './Option.css'
import toast, { Toaster } from 'react-hot-toast';


const Option = ({ option, question }) => {
    
    let massage = '';

    const notify = () => {
        toast(massage);
        
    }
    
    return (
        <div className='option-container'>
            <button onClick={() => {
                    
                    if (option === question.correctAnswer) {

                        massage="correct"
                    }
                    else {
                        massage="wrong"
                    }
                
                    notify()
                }}>
                {option}</button>
            <Toaster/>
        </div>
    );
};

export default Option;