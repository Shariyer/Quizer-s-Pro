import React from 'react';
import { useRouteError } from 'react-router-dom';
import './Error.css'

const Error = () => {
    const error = useRouteError();
    return (
        <div className='Error-container'>
            <h2 className='error-header'>Opps!!!! an Error Ocurred</h2>
            <br />
            {error && (
                <div>
                    <h3 className='error-details'>{error.status}</h3>
                    <h3 className='error-details'>{error.statusText || error.message}</h3>
                </div>
            )}

        </div>
    );
};

export default Error;