"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


const BookForm = ({ facility }) => {
    const { _id,facilityName, location, facilityType, price, capacity, timeSlot, imageUrl, description } = facility;


    const { data: session} = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const facilityData = Object.fromEntries(formData.entries());

        const BookingData = {
            userId: user?.id,
            userImage:user?.image,
            userName:user?.name,
            facilityId:_id,
            facilityName,
            price:price*facilityData.duration,
            imageUrl,
            duration:facilityData.duration,
            timeSlot:facilityData.timeSlot,
            bookingDate: new Date(facilityData.bookingDate),
            status:'pending'
        }
        // console.log(BookingData);
        const {data:tokenData} = await authClient.token()
         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking`,{
                method: 'POST',
                headers: {
                 'content-type':'application/json',
                 authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(BookingData)
         });

         const data= await res.json();
         toast.success("Your  booked successfully!");
         redirect('/my-booking')
    }

    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-blue-800'>Book Your Slot</h1>
            <p className='text-center'>Choose your date and slot</p>
            <form onSubmit={onSubmit} className="p-10 space-y-8 w-2xl mx-auto">
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

                    <TextField name="duration" isRequired>
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

                    {/* Booking Date */}
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
    );
};

export default BookForm;