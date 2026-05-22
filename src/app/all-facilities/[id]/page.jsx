
import BookForm from '@/component/BookForm';
import { auth } from '@/lib/auth';
import { Select, Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaBangladeshiTakaSign, FaPersonSwimming } from 'react-icons/fa6';
import { GiTennisRacket } from 'react-icons/gi';
import { MdSportsTennis } from 'react-icons/md';
import { RiFootballFill } from 'react-icons/ri';

const FacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers:await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility/${id}`,{
        headers: {
            authorization : `Bearer ${token}`
        }
    });
    const facility = await res.json();
    const { facilityName, location, facilityType, price, capacity, timeSlot, imageUrl, description,email } = facility;
    return (
        <div className='container mx-auto grid grid-cols-2 gap-2 my-10 items-center'>
            {/* Facility Details */}
            <div>
                <Image
                    src={imageUrl}
                    alt={facilityName}
                    width={300}
                    height={200}
                    className='w-full h-60 mb-6 rounded-md'
                />
                
                <div className='mb-5 flex flex-col'>

                    <h1 className='text-3xl text-blue-800 font-bold '>{facilityName}</h1>
                    <p className=''>{email}</p>

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
                        <h1 className='text-xl font-semibold'>Price</h1>
                        <p className='flex items-center'>{price} BDT/Hours</p>
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
            <BookForm facility={facility} ></BookForm>
        </div>
    );
};

export default FacilitiesDetailsPage;