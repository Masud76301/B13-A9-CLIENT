import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center text-center'>
            <RingLoader />
            <h1 className='text-2xl font-bold mt-10'>Loading.....</h1>
        </div>
    );
};

export default LoadingPage;