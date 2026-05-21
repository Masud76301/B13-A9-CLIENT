import BookingCard from '@/component/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const myBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const res = await fetch(`http://localhost:8000/booking/${user?.id}`)
    const bookings = await res.json();

    return (
        <div className='w-4xl mx-auto my-10'>
            <div>
                <h1 className='text-center text-3xl font-bold text-blue-700'>MY BOOKING</h1>
            </div>
            <div className='flex flex-col gap-4 mt-10'>

                {
                    bookings.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)
                }
            </div>

        </div>
    );
};

export default myBookingPage;