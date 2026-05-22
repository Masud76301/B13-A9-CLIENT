"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdPricetag, IoMdTime } from 'react-icons/io';
import { toast } from 'react-toastify';

const BookingCard =  ({ booking }) => {
     const router = useRouter();
    const { _id,imageUrl, facilityName, bookingDate, timeSlot, price, status } =  booking;
  
    const handleDelete = async () => {
          const {data:tokenData} =await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                 authorization: `Bearer ${tokenData?.token}`

            }
        });

        const data = await res.json();
        if(data){
            toast.success("Cancel Successful");
        }
          router.push("/my-booking"); 

    }
    return (
        <div>
            <Card className="border rounded-sm hover:bg-blue-50">
                <div className='flex  md:justify-between items-center '>
                  
                    <div className='flex flex-col justify-center items-center md:flex-row gap-2'>
                        <Image
                            src={imageUrl}
                            alt={facilityName}
                            width={80}
                            height={80}
                            className='rounded-sm w-full md:w-20'
                        ></Image>

                        <div>
                            <div className='flex flex-col md:flex-row gap-3 items-start md:items-center'>
                                <h1 className='text-xl font-bold'>{facilityName}</h1>
                                <Chip color="accent" className='h-5 mb-10 md:mb-0 rounded-xl bg-amber-400 text-black'>{status}</Chip>
                            </div>
                            <div className='flex flex-col md:flex-row gap-4'>
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