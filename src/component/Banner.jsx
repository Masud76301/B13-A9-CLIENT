import { Button, Separator } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaLocationPin, FaMapLocation, FaStar } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className=' flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/Banner.jpg)] w-full  y-5 bg-cover mb-10 bg-center h-150'>
            <div className='container mx-auto space-y-10'>
                <p className='flex gap-1 items-center text-blue-100   w-62 py-1  bg-blue-800  drop-shadow-lg drop-shadow-cyan-500/50   rounded-2xl justify-center '><IoLocationOutline></IoLocationOutline>40+ venues across the city</p>
                <h1 className='text-5xl text-shadow-lg/20 text-blue-100  font-bold '> Book your perfect court in <br /> minutes</h1>
                <p className='text-blue-100 text-[18px]'>Football turfs, badminton courts, swimming lanes, and <br></br> tennis courts — find, compare, and reserve in a few taps.</p>
                <div className='space-x-2'>
                    <Link href="/all-facilities"><Button  className='rounded-sm text-white bg-blue-800' >Explore Facilities</Button></Link>
                    <Link href="#howItWorks"><Button variant='outline' className='rounded-sm text-blue-100' >How it works</Button></Link>

                </div>

                <Separator className='opacity-50'></Separator>

                <div className='flex gap-20'>
                    <div>
                        <h1 className='text-3xl text-blue-100 font-semibold'>1.2k+</h1>
                        <p className='text-blue-200 font-semibold'>Booking made</p>
                    </div>

                     <div>
                        <h1 className='text-3xl text-blue-100 font-semibold'>40+</h1>
                        <p className='text-blue-200 font-semibold'>Venues</p>
                    </div>

                     <div>
                        <h1 className='text-3xl text-blue-100 font-semibold flex items-center gap-1'>4.8 <FaStar></FaStar></h1>
                        <p className='text-blue-200 font-semibold'>Avg rating </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;