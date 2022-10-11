import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'

const Quizes = () => {
    const loader = useLoaderData();
    const { data } = loader;

    return (
        <div>
            <div className='grid-container'>
                    {
                        data.map(quiz => <Quiz data={quiz}
                        key={data.id}
                        ></Quiz>)
                    }
            </div>
        </div>
    );
};

export default Quizes;