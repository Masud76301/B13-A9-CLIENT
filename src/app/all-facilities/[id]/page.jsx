
import { Select, Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaBangladeshiTakaSign, FaPersonSwimming } from 'react-icons/fa6';
import { GiTennisRacket } from 'react-icons/gi';
import { MdSportsTennis } from 'react-icons/md';
import { RiFootballFill } from 'react-icons/ri';

const FacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:8000/facility/${id}`);
    const facility = await res.json();
    const { facilityName, location, facilityType, price, capacity, timeSlot, imageUrl, description } = facility;
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
                >
                </Image>
                <div className='mb-5 flex items-center justify-between'>

                    <h1 className='text-3xl text-blue-800 font-bold '>{facilityName}</h1>

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
            <div>
                <h1 className='text-center text-4xl font-bold text-blue-800'>Book Your Slot</h1>
                <p className='text-center'>Choose your date and slot</p>
                <form className="p-10 space-y-8 w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Facility Name */}
                        <div className="md:col-span-2">
                            <TextField name="facilityName" isRequired>
                                <Label>Facility Name</Label>
                                <Input value={facilityName} readOnly className="rounded-sm" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Location */}
                        <TextField name="location" isRequired>
                            <Label>Location</Label>
                            <Input value={location} readOnly className="rounded-sm" />
                            <FieldError />
                        </TextField>

                        <TextField name="Duration" isRequired>
                            <Label>Duration (Hours)</Label>
                            <Input type='Number' placeholder="2" className="rounded-sm" min="1" max="4" />
                            <FieldError />
                        </TextField>


                        {/*  Time Slot */}
                        <div className="md:col-span-2">
                            <TextField name="timeSlot" isRequired>
                                <Label>Time Slot</Label>
                                <Input placeholder="Morning (9.00am to 11.00am)" className="rounded-sm" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="bookingDate" isRequired>
                                <Label>Booking Date</Label>
                                <Input type="date" className="rounded-sm" />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                   
                    <Card className='bg-blue-100 rounded-sm'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-2xl font-bold'>Total Price</h1>
                            <div>
                                <h1 className='text-2xl font-bold'>{price * 2} BDT</h1>
                                <p className='text-[12px] flex  items-center gap-2'>{price} BDT/ Hours</p>
                            </div>
                        </div>

                    </Card>

                     {/* Buttons */}

                    <Button
                        type="submit"
                        className=" rounded-sm w-full bg-blue-800 text-white"
                    >
                        Confirm Booking
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FacilitiesDetailsPage;