import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line,Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';


const Statistics = () => {
    const chartLoader = useLoaderData();
    const data = chartLoader.data;
    // console.log(data);

    
    return (
        <div className='state-container'>
            
        
        
                

            </div>
            
    );
};

export default Statistics;