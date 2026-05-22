import { Card } from '@heroui/react';
import React from 'react';

const HowItWorks = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-bold mb-6'>How it Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <Card className='space-y-1 flex flex-col justify-center items-center border bg-blue-50 rounded-lg'>
                    <div className='h-10 w-10 justify-center flex items-center text-3xl rounded-full bg-blue-700 text-white font-bold' >1</div>
                    <h2 className='text-2xl font-semibold'>Find a facility</h2>
                    <p className='text-center'>Browse all available courts and turfs by sport type or location.</p>
                </Card>

                <Card className='space-y-1 flex flex-col justify-center items-center border bg-blue-50 rounded-lg'>
                    <div className='h-10 w-10 justify-center flex items-center text-3xl rounded-full bg-blue-700 text-white font-bold' >2</div>
                    <h2 className='text-2xl font-semibold'>Pick a slot</h2>
                    <p className='text-center'>Choose your preferred date and an open time slot.</p>
                </Card>

                <Card className='space-y-1 flex flex-col justify-center items-center border bg-blue-50 rounded-lg'>
                    <div className='h-10 w-10 justify-center flex items-center text-3xl rounded-full bg-blue-700 text-white font-bold' >3</div>
                    <h2 className='text-2xl font-semibold'>Confirm booking</h2>
                    <p className='text-center'>Log in and confirm your reservation instantly.</p>
                </Card>


                <Card className='space-y-1 flex flex-col justify-center items-center border bg-blue-50 rounded-lg'>
                    <div className='h-10 w-10 justify-center flex items-center text-3xl rounded-full bg-blue-700 text-white font-bold' >4</div>
                    <h2 className='text-2xl font-semibold'>Play!</h2>
                    <p className='text-center'>Play your game, and manage bookings from your dashboard.</p>
                </Card>
            </div>
        </div>
    );
};

export default HowItWorks;