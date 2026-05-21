"use client"
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdPricetag, IoMdTime } from 'react-icons/io';
import { toast } from 'react-toastify';

const BookingCard =  ({ booking }) => {
    const { _id,imageUrl, facilityName, bookingDate, timeSlot, price, status } =  booking;
    
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:8000/booking/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",

            }
        });

        const data = await res.json();
        if(data){
            toast.success("Cancel Successful");
        }
        redirect('/my-booking');

    }
    return (
        <div>
            <Card className="border rounded-sm hover:bg-blue-50">
                <div className='flex justify-between items-center '>
                  
                    <div className='flex gap-2'>
                        <Image
                            src={imageUrl}
                            alt={facilityName}
                            width={80}
                            height={80}
                            className='rounded-sm'
                        ></Image>

                        <div>
                            <div className='flex gap-3 items-center'>
                                <h1 className='text-xl font-bold'>{facilityName}</h1>
                                <Chip color="accent" className='h-5 rounded-xl bg-amber-400 text-black'>{status}</Chip>
                            </div>
                            <div className='flex gap-4'>
                                <p className='flex gap-2 items-center'><CgCalendarDates />{new Date(bookingDate).toLocaleDateString("es-US", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric"
                                })}</p>
                                <p className='flex gap-2 items-center'><IoMdTime />{timeSlot}</p>
                                <p className='flex gap-2 items-center'><IoMdPricetag />{price} BDT</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <Button onClick={handleDelete} variant="outline" className="rounded-sm hover:bg-red-500 hover:text-white font-bold">Cancel</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BookingCard;