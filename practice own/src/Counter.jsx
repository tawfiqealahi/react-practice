import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
     const addNumber=()=>{
        const newNumber = count + 1;
        setCount(newNumber);
     }
    return (
        <div>
        <h1>counter: {count}</h1>
            <button onClick={addNumber}>increase</button>
        </div>
    );
};

export default Counter;