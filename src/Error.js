import React from 'react';
import './Error.css';

const Error = ({errorContent}) => {
    return (
        <React.Fragment>
            <div className='error'>
                <h5>{errorContent}</h5>
            </div>
        </React.Fragment>
    )
}

export default Error;