import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const FacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:8000/facility/${id}`);
    const facility = await res.json();
    const { facilityName, location, facilityType, price, capacity, timeSlot, imageUrl,description } = facility;
    return (
        <div className='container mx-auto grid grid-cols-2 gap-2 my-10'>
            {/* Facility Details */}
            <div>
                <Image
                    src={imageUrl}
                    alt={facilityName}
                    width={300}
                    height={200}
                    className='w-full h-60 mb-6 rounded-md'
                >
                </Image>
                <div className='mb-5 flex items-center justify-between'>

                    <h1 className='text-3xl text-blue-800 font-bold '>{facilityName}</h1>
                    <h1 className='text-2xl font-bold flex items-center gap-2'><FaBangladeshiTakaSign></FaBangladeshiTakaSign>{price}</h1>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <Card className='col-span-1 bg-blue-100 rounded-md'>
                        <h1 className='text-xl font-semibold'>Location</h1>
                        <p>{location}</p>
                    </Card>

                    <Card className='col-span-1 bg-blue-100 rounded-md'>
                        <h1 className='text-xl font-semibold'>Facility Type</h1>
                        <p>{facilityType}</p>
                    </Card>

                    <Card className='col-span-1 bg-blue-100 rounded-md'>
                        <h1 className='text-xl font-semibold'>Duration</h1>
                        <p>2 hours</p>
                    </Card>


                    <Card className='col-span-1 bg-blue-100 rounded-md'>
                        <h1 className='text-xl font-semibold'>Maximum Capacity</h1>
                        <p>{capacity}</p>
                    </Card>

                     <Card className='col-span-2 bg-blue-100 rounded-md'>
                        <h1 className='text-xl font-semibold'>Available Time Slot</h1>
                        <p>{timeSlot}</p>
                    </Card>

                    <Card className='col-span-2 bg-blue-100 rounded-md'>
                        <h1 className='text-xl font-semibold'>About This Facilities</h1>
                        <p>{description}</p>
                    </Card>
                    
                </div>
            </div>

            {/* Booking Form */}
        </div>
    );
};

export default FacilitiesDetailsPage;