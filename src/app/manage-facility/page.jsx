import ManageFacilityCard from '@/component/ManageFacilityCard';
import React from 'react';

const manageFacilitiesPage = async () => {
    const res = await fetch('http://localhost:8000/facility');
    const facilities = await res.json();

    return (
        <div className='w-4xl mx-auto my-10'>
            <h1 className='text-center text-4xl font-bold text-blue-700'>MANAGE YOUR FACILITY</h1>
            <p className='text-center'>Edit or remove your listed Venues </p>
            <div className='flex flex-col gap-4 mt-10'>

                {
                    facilities.map(facility => <ManageFacilityCard key={facility._id} facility={facility}></ManageFacilityCard>)
                }
            </div>
        </div>
    );
};

export default manageFacilitiesPage;