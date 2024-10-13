import React from 'react';

const Friend = ({details}) => {
    return (
        <div>
            <h2>Friend Name: {details.name}</h2>
            <p>Friend's Email: {details.email}</p>
        </div>
    );
};

export default Friend;