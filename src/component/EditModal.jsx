'use client'
import { Select, Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField } from '@heroui/react';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FaPersonSwimming } from 'react-icons/fa6';
import { GiTennisRacket } from 'react-icons/gi';
import { MdSportsTennis } from 'react-icons/md';
import { RiFootballFill } from 'react-icons/ri';

const EditModal = ({facility}) => {
    const {_id, facilityName, location, facilityType, price, capacity, timeSlot, imageUrl, description } = facility;
    const onSubmit = async (e) =>{
           e.preventDefault()
           const formData = new FormData(e.currentTarget);
           const facility = Object.fromEntries(formData.entries());
           console.log(facility);
   
           const res = await fetch(`http://localhost:8000/facility/${_id}`,{
                  method: 'PATCH',
                  headers: {
                   'content-type':'application/json'
                  },
                  body: JSON.stringify(facility)
           });
   
           const data= await res.json();
           toast.success("Facility are update successfully!");
       }

     
    return (
        <Modal>
            <Button variant='Ghost' className="text-blue-500"><FaRegEdit />Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading className='text-2xl text-blue-700 text-center'>Update Your Facility</Modal.Heading>
                            
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="p-10 space-y-8 w-xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Facility Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={facilityName} name="facilityName" isRequired>
                                                <Label>Facility Name</Label>
                                                <Input placeholder="Tennis Courts" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Location */}
                                        <TextField defaultValue={location} name="location" isRequired>
                                            <Label>Location</Label>
                                            <Input placeholder="Agrabad" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Facility Type*/}
                                        <div>
                                            <Select
                                                name="facilityType"
                                                defaultValue={facilityType}
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
                                        <TextField defaultValue={price} name="price" type="number" isRequired>
                                            <Label>Price Per Hour(BDT)</Label>
                                            <Input
                                                type="number"
                                                placeholder="100"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Capacity */}
                                        <TextField defaultValue={capacity} name="capacity" isRequired>
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
                                            <TextField defaultValue={timeSlot} name="timeSlot" isRequired>
                                                <Label>Available Time Slot</Label>
                                                <Input placeholder="Morning (9.00am to 11.00am)" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/bali-paradise.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={description} name="description" isRequired>
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
                                    <Modal.Footer>
                                        <Button className="rounded-sm"  slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button className="rounded-sm"  type='submit' slot="close">Update</Button>
                                    </Modal.Footer>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditModal;