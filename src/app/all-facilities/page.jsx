import FacilityCard from '@/component/FacilityCard';
import SearchBar from '@/component/SearchBar';
import React from 'react';

const allFacilitiesPage = async ({searchParams}) => {
        const {search} = await searchParams
        const facilitySearch = search || "" ;
    // const search = await searchParams.search || "";
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility?search=${facilitySearch}`,{ cache: "no-store" });
    const facilities = await res.json();
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-4xl text-center font-bold mt-10 text-shadow-2xs mb-10'>All <span className='font-bold text-blue-800'>FACILITIES</span> </h1>
            <SearchBar></SearchBar>

            <div className='grid grid-cols-4 gap-6 auto-rows-fr'>
                {
                    facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                }
            </div>
        </div>
    );
};

export default allFacilitiesPage;