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
           <div>
                    <h3>Statistics total(total question of Quizes) vs id(of every quiz topic) </h3>
            </div>
            <div className='state-container'>

                    <LineChart width={330} height={250} data={data}
                        >
                        <Line type="monotone" dataKey="total" stroke="#000000" />
                        <CartesianGrid strokeDasharray="3 3" />
                         <XAxis dataKey="id" />
                        <YAxis dataKey="total"/>
                        <Tooltip />
                        <Legend />
                    
                    </LineChart>
               
            </div> 
        
        
                

            </div>
            
    );
};

export default Statistics;