import React, { useEffect, useState } from 'react';

const Users = () => {
    const[users,setUsers]=useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))

    },[])

    return (
        <div>
            <h3>users: {users.length-1}</h3>
            {
                
            }
        </div>
    );
};

export default Users;