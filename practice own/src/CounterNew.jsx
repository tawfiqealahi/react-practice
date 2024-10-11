import React, { useState } from 'react';

const CounterNew = () => {
    const [count,setCount]=useState(0);
    const addHandler=()=>{
        const newState=count+1;
        setCount(newState);
    }
    //decrease
    const decreaseNumber=()=>{
        const decrease = count-1;
        setCount(decrease);
    }
    return (
        <div>
        <h1>Counter: {count}</h1>
            <button onClick={addHandler}>Increase state</button> <br /> <br />
            <button onClick={decreaseNumber}>Decrease state</button>
            
        </div>
    );
};

export default CounterNew;