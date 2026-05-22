import React from 'react';
import FacilityCard from './FacilityCard';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/featured`);
    const featuredData = await res.json();
    return (
        <div className='container mx-auto my-10'>
            <div className='flex justify-between'>

                <h1 className='text-3xl font-bold mb-6'>Featured Facilities</h1>
                <Link href='/all-facilities'><Button variant='outline' className="rounded-md">All Facilities</Button></Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                {
                    featuredData.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                }
            </div>
        </div>
    );
};

export default Featured;