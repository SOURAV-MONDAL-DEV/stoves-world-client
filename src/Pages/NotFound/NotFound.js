import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='text-center mt-5 pt-5'>
                <h1 className='text-2xl font-bold text-yellow-500'>Opps!</h1>
                <h2  className='text-xl font-bold text-green-500'>We can not found This page you are trying to go.</h2>
            </div>
        </div>
    );
};

export default NotFound;