'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    const { data: session, error } = authClient.useSession();
    const user = session?.user;
    console.log(user);
    const handleSingOut = async () => {
        await authClient.signOut();
    }
    return (

        <div className='bg-white shadow h-16 p-3 '>
            <div className='container mx-auto flex justify-between'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Image
                        src="/sportCoveLogo.png"
                        alt="SportCove"
                        width={75}
                        height={75} />
                    <div className='relative -top-1 -left-1'>
                        <h1 className='text-blue-600 text-2xl font-bold' >SportCove</h1>
                    </div>

                </div>


                {/* All link  */}
                <div className=''>
                    {user ? (<div className='flex items-center font-semibold gap-6 '>
                        <Link href='/'>Home</Link>
                        <Link href='/all-facilities'>All Facilities</Link>
                        <Link href='/'>My Booking</Link>
                        <Link href='/add-facility'>Add Facility</Link>
                        <Link href='/manage-facility'>Manage Facility</Link>
                    </div>) : (<div className='flex items-center font-semibold gap-6 '>
                        <Link href='/'>Home</Link>
                        <Link href='/all-facilities'>All Facilities</Link>
                    </div>)}

                </div>


                {/* Login and Logout */}
                <div className='space-x-2'>
                    {user ?

                        (
                            <div className='flex gap-2 items-center'>
                                <Link href="/profile">
                                    <Avatar size="sm">
                                        <AvatarImage src={user?.image} referrerPolicy='no-referrer' />
                                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </Link>

                                <Button onClick={handleSingOut} size="sm" variant='outline' className='hover:bg-red-500 hover:text-white rounded-md'>Logout</Button>
                            </div>
                        ) : (

                            <Link href="/login"><Button variant='outline' className={`bg-blue-700 rounded-sm text-white`}>Login</Button></Link>

                        )}


                </div>
            </div>


        </div>
    );
};

export default Navbar;