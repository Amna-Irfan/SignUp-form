import React, { useState} from 'react';
import './SignUp.css';
import Users from './Users';
import Error from './Error';
import { v4 as uuid } from 'uuid';
import {validName, validEmail, validPassword} from './regex';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorContent, setErrorContent] =  useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && password && confirmPassword){
            if (!validName.test(name)) {
                setErrorContent('Please enter valid Name');
                setIsError(true);
            }
            else if(!validEmail.test(email)) {
                setErrorContent('Please enter valid Email');
                setIsError(true);
            }
            else if((!validPassword.test(password)) && (!validPassword.test(confirmPassword))) {
                setErrorContent('Please enter valid Password');
                setIsError(true);
            }
            else if(password!==confirmPassword) {
                setErrorContent('Passwords does not match');
                setIsError(true);
            }
            else {
                setErrorContent('');
                setIsError(false);
                const newUser = {id: uuid().slice(0,8), name, email, password};
                setUsers((users)=>{
                    return [...users, newUser];
                });
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }
        }
        else
        {
            setErrorContent('Please fill the form');
            setIsError(true);
        }
    }

    return (
        <React.Fragment>
            <h1>SignUp</h1>
            {isError && <Error errorContent={errorContent}/>}
            <div className='form-center'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='name'>Name: </label>
                        <br/>
                        <input 
                        type='text'
                        id='name'
                        name='name'
                        title='Only letters with spaces'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='email'>Email: </label>
                        <br/>
                        <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='password'>Password: </label>
                        <br/>
                        <input
                        type='password'
                        id='password'
                        name='password'
                        title='Atleast one letter and digit, with minimum length of 6'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label style={{fontWeight: 'bold'}} htmlFor='confirmPassword'>Confirm Password: </label>
                        <br/>
                        <input
                        type='password'
                        id='confirmPassword'
                        name='confirmPassword'
                        title='Atleast one letter and digit, with minimum length of 6'
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </div>
                    <button className='button' type='submit'>Submit</button>
                </form>
            </div>
            {(users.length > 0) && <Users users={users} />}
        </React.Fragment>
    )
}

export default SignUp;