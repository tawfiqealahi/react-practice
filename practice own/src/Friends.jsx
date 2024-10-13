import React, { useEffect, useState } from 'react';
import Friend from './Friend';

const Friends = () => {
    const[friends,setFriends]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h1>Total Friend: {friends.length}</h1>
            {
                friends.map(friend=> <Friend details={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;