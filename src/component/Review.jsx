import { Avatar, AvatarFallback, AvatarImage, Card } from '@heroui/react';
import React from 'react';

const Review = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-bold mb-6'>User Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Card className=' flex flex-col border bg-blue-50 rounded-lg'>
                    <div className='text-yellow-600' >★★★★★</div>
                    <p className=''>Booked a turf for our team in under 2 minutes. The slot selection UI is so clean and intuitive.</p>
                    <div className='flex gap-2 items-center'>
                        <Avatar size="lg">
                            <AvatarImage src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" referrerPolicy='no-referrer' />
                            <AvatarFallback>AR</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className='text-2xl font-semibold'>Arif Rahman</h2>
                            <p>Football player</p>
                        </div>
                    </div>
                </Card>

                <Card className=' flex flex-col border bg-blue-50 rounded-lg'>
                    <div className='text-yellow-600' >★★★★★</div>
                    <p className=''>Managing my badminton court listings is effortless. The owner dashboard is exactly what I needed.</p>
                    <div className='flex gap-4 items-center'>
                        <Avatar size="lg">
                            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvwJG3J0AvDmbaE8_obrEW5IHHEB2zDaYEw&s" referrerPolicy='no-referrer' />
                            <AvatarFallback>SN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className='text-2xl font-semibold'>Sadia Noor</h2>
                            <p>Court owner</p>
                        </div>
                    </div>
                </Card>

                <Card className=' flex flex-col border bg-blue-50 rounded-lg'>
                    <div className='text-yellow-600' >★★★★☆</div>
                    <p className=''>Finally a local platform for sports venue booking. Real-time slot visibility saves a lot of phone calls.</p>
                    <div className='flex gap-4 items-center'>
                        <Avatar size="lg">
                            <AvatarImage src="https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" referrerPolicy='no-referrer' />
                            <AvatarFallback>SN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className='text-2xl font-semibold'>Tanvir Hossain</h2>
                            <p>Tennis player</p>
                        </div>
                    </div>
                </Card>



            </div>
        </div>
    );
};

export default Review;