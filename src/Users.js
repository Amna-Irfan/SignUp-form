import React from 'react';
import './Users.css';
import User from './User';

const Users = React.memo(({users}) => {
    return (
        <section className='list'>
        {
            users.map((user)=>{
                return(
                    <User key={user.id} user={user}/>
                )
            })
        }
        </section>
    )
})

export default Users;