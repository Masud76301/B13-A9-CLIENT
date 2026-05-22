'use client'
import { authClient } from '@/lib/auth-client';
import { Select, Button, FieldError, Input, Label, ListBox, TextArea, TextField, Card } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaPersonSwimming } from 'react-icons/fa6';
import { GiTennisRacket } from 'react-icons/gi';
import { MdSportsTennis } from 'react-icons/md';
import { RiFootballFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const AddFacilityPage = () => {
    const { data: session} = authClient.useSession();
    const user = session?.user;
   
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formData.entries());
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(facility)
        });

        const data = await res.json();
        if (data) {

            toast.success("Facility are added successfully!");
        }
        redirect('/all-facilities')
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center font-bold mt-10 text-shadow-2xs'>ADD A NEW <span className='font-bold text-blue-800'>FACILITY</span> </h1>
            <Card className='my-10 border w-3xl mx-auto bg-blue-50 rounded-md'>
                <form onSubmit={onSubmit} className="p-10 space-y-8 w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Facility Name */}
                        <div className="md:col-span-2">
                            <TextField name="facilityName" isRequired>
                                <Label>Facility Name</Label>
                                <Input placeholder="Tennis Courts" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Location */}
                        <TextField name="location" isRequired>
                            <Label>Location</Label>
                            <Input placeholder="Agrabad" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Facility Type*/}
                        <div>
                            <Select
                                name="facilityType"
                                isRequired
                                className="w-full"
                                placeholder="Select Type"
                            >
                                <Label>Facility Type</Label>
                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>

                                        <ListBox.Item id="Football" textValue="Football">
                                            <RiFootballFill />Football
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Tennis" textValue="Tennis">
                                            <MdSportsTennis />Tennis
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Badminton" textValue="Badminton">
                                            <GiTennisRacket />Badminton
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Swimming" textValue="Swimming">
                                            <FaPersonSwimming />Swimming
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price Per Hour(BDT)</Label>
                            <Input
                                type="number"
                                placeholder="100"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Capacity */}
                        <TextField name="capacity" isRequired>
                            <Label>Capacity</Label>
                            <Input
                                type="number"
                                placeholder="50"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Available Time Slot */}
                        <div className="md:col-span-2">
                            <TextField name="timeSlot" isRequired>
                                <Label>Available Time Slot</Label>
                                <Input placeholder="Morning (9.00am to 11.00am)" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                        
                        {/* Owner Email */}
                        <div className='md:col-span-2'>
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                            >
                                <Label>Email</Label>
                                <Input value={user?.email} readOnly/>
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe the sports facilities..."
                                    className="rounded-3xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        className=" rounded-sm w-full bg-blue-800 text-white"
                    >
                        Add Facility
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddFacilityPage;