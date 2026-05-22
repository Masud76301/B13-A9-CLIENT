import FacilityCard from '@/component/FacilityCard';
import React from 'react';

const allFacilitiesPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility`);
    const facilities = await res.json();
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-4xl text-center font-bold mt-10 text-shadow-2xs mb-10'>All <span className='font-bold text-blue-800'>FACILITIES</span> </h1>
            
                <div className='grid grid-cols-4 gap-6 auto-rows-fr'>
                    {
                        facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                    }
                </div>
        </div>
    );
};

export default allFacilitiesPage;