import React from 'react';

const Intro = () => {
    return (
        <div className='grid md:grid-cols-2 m-5 md:m-20 bg-slate-400'>
            <div className='m-10 md:m-2 lg:m-10 '>
                <p>left</p>
            </div>
            <div className='m-10 md:m-2 lg:m-10 '>
                <p>right</p>
            </div>
        </div>
    );
};

export default Intro;