
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-white shadow h-16 p-3 '>
            <div className='container mx-auto flex justify-between'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Image
                        src="/sportCoveLogo.png"
                        alt="SportCove"
                        width={70}
                        height={70} />

                    <h1 className='text-blue-600 text-2xl font-bold' >SportCove</h1>
                </div>


                {/* All link  */}
                <div className='flex items-center font-semibold gap-6 '>
                    <Link href='/'>Home</Link>
                    <Link href='/all-facilities'>All Facilities</Link>
                    <Link href='/'>My Booking</Link>
                    <Link href='/add-facility'>Add Facility</Link>
                    <Link href='/'>Manage Facility</Link>
                </div>


                {/* Login and Logout */}
                <div className='flex items-center gap-2'>
                    <Link href="/login"><Button variant='outline' className={`bg-blue-700 rounded-sm text-white`}>Login</Button></Link>
                
                </div>
            </div>


        </div>
    );
};

export default Navbar;