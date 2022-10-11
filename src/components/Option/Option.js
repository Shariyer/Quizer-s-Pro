import React from 'react';
import './Option.css'
const Option = ({ option }) => {
    const onclick = () => {
        console.log("clicked!")
    }
    return (
        <div>
          <h3 onClick={onclick}><input type="radio"/>{option}</h3> 
        </div>
    );
};

export default Option;