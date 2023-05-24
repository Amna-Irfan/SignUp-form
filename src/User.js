import React from 'react';
import './User.css';

const User = ({user}) => {

    const {id, name, email} = user;

    return (
    <React.Fragment>
        <div className='item'>
            <h4>{name}</h4>
            <h5>{email}</h5>
        </div>
    </React.Fragment>
)};

export default User;