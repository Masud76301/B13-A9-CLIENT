import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBangladeshiTakaSign, FaLocationPin } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { MdAccessTimeFilled, MdLocationOn } from "react-icons/md";


const FacilityCard = ({ facility }) => {
    const { facilityName, location, facilityType, price, capacity, timeSlot, imageUrl,_id } = facility;
    return (
        <div className="">
            <Card className="border rounded-md bg-blue-100 relative h-full flex flex-col">

                <Image
                    src={imageUrl}
                    alt={facilityName}
                    width={200}
                    height={200}
                    className="w-full rounded-sm"
                ></Image>
                <div className="flex flex-col grow ">
                    

                        <Chip color="accent" className=" bg-blue-100 rounded-lg absolute top-6 right-6">{facilityType}</Chip>
              
                    <div className="space-y-2 flex-1">
                        <h1 className="text-blue-800 text-xl font-bold mb-2">{facilityName}</h1>
                        <h1 className="flex items-center font-semibold gap-2"><MdLocationOn />{location}</h1>
                        <p className="flex items-center gap-2 text-[14px] font-semibold"><ImUsers /> Total Capacity : {capacity}</p>
                        <p className="flex items-center gap-2 text-[14px] font-semibold"><MdAccessTimeFilled />{timeSlot}</p>

                    </div>


                    <div className="mt-6 flex items-center gap-4">
                        <h1 className="text-2xl font-bold flex items-center gap-1"><FaBangladeshiTakaSign />{price}</h1>
                       <Link href={`/all-facilities/${_id}`} className="block w-full"> <Button className="rounded-sm w-full bg-blue-800">Book Now</Button> </Link>
                    </div>

                </div>



            </Card>
        </div>
    );
};

export default FacilityCard;