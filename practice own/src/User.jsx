import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h2>User Name: {user.name}</h2>
        </div>
    );
};

export default User;