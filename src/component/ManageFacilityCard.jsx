import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { CloseButton } from 'react-toastify';
import EditModal from './EditModal';
import { DeleteAlert } from './DeleteAlert';


const ManageFacilityCard = async ({ facility }) => {
   
    const { facilityName, location, facilityType, price, capacity, timeSlot, imageUrl, description } = facility;
    return (
        <div className='container mx-auto '>
            <Card className="border rounded-sm">
              <div className='flex justify-between'>
                 <div className='flex gap-2'>
                    <Image
                        src={imageUrl}
                        alt={facilityName}
                        width={80}
                        height={80}
                    ></Image>

                    <div>
                        <h1 className='text-xl font-bold'>{facilityName}</h1>
                        <p>{location}</p>
                    </div>
               </div>

               <div className='flex flex-col'>
                <EditModal facility={facility}></EditModal>
                <DeleteAlert facility={facility}></DeleteAlert>
               </div>
              </div>
            </Card>

        </div>
    );
};

export default ManageFacilityCard;