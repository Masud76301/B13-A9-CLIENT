
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLocationArrow, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiPhone } from 'react-icons/pi';

const Footer = () => {
    return (
        <div className='h-auto md:h-88 bg-blue-800 text-white'>
            <div className='container  lg:mx-auto justify-items-center grid grid-cols-2 md:grid-cols-4 md:h-[80%] '>

                <div className='mt-15'>
                    <div className='flex items-center'>

                        <Image src='/sportCoveLogo.png' alt="sportCove" width={100} height={100} className='md:relative right-7' ></Image>
                        <h1 className=' hidden md:block md:relative right-10 bottom-1 text-3xl font-bold '>SportCove</h1>
                    </div>
                    <p className="text-sm lg:mx-auto mx-2 text-gray-200 leading-relaxed">
                        Book football turfs, badminton courts, swimming lanes, and tennis courts across the city.
                    </p>
                </div>

                <div className='mt-15'>
                    <h1 className='font-semibold text-xl mb-2'>Platform</h1>
                    <p className='text-gray-300'>All Facilities</p>
                    <p className='text-gray-300'>My Booking</p>
                    <p className='text-gray-300'>Add Facilities</p>
                    
                </div>

                <div className='mt-15'>
                    <h1 className='font-semibold text-xl mb-2'>Contact Us</h1>
                    <p className='text-gray-300 text-[10px] md:text-[14px] flex gap-2 items-center'> <PiPhone></PiPhone> +880 1700-000000</p>
                    <p className='text-gray-300 text-[10px] md:text-[14px] flex gap-2 items-center'><MdEmail></MdEmail>hello@sportcove.com</p>
                    <p className='text-gray-300 text-[10px] md:text-[14px] flex gap-2 items-center'><FaLocationArrow /> Chattogram,Bangladesh</p>
                </div>

                <div className='mt-15'>
                    <h1 className='font-semibold text-xl mb-2'>Help</h1>
                    <p className='text-gray-300'>About us</p>
                    <p className='text-gray-300'>Booking guide</p>
                    <p className='text-gray-300'>Privacy policy</p>
                    <p className='text-gray-300'>Terms of use</p>
                </div>


            </div>
            <hr className=' w-[90%] opacity-40  mx-auto mb-2'></hr>
            <div className='flex flex-col md:flex-row gap-2 md:gap-20 md:items-center lg:justify-between container  lg:mx-auto items-center mt-6'>
                <h1 className='text-gray-300'>© 2026 SportCove. All rights reserved.</h1>
                <div className='flex gap-3 text-[16px] lg:text-xl text-gray-300 mb-2'>
                    <FaFacebook />
                    <FaXTwitter />
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
};

export default Footer;