import FacilityCard from '@/component/FacilityCard';
import Filter from '@/component/Filter';
import SearchBar from '@/component/SearchBar';
import React from 'react';

const allFacilitiesPage = async ({ searchParams }) => {
    const { search,types } = await searchParams

    const facilitySearch = search || "";
    const facilityTypes = types || "";
    // const search = await searchParams.search || "";

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility?search=${facilitySearch}&types=${facilityTypes}`, { cache: "no-store" });
    const facilities = await res.json();
    return (
        <div className='container mx-4  w-[90vw] lg:w-full md:mx-auto my-10'>
            <h1 className='text-4xl text-center font-bold mt-10 text-shadow-2xs mb-10'>All <span className='font-bold text-blue-800'>FACILITIES</span> </h1>
            <div className='flex items-center flex-col md:flex-row'>

                <SearchBar></SearchBar>
                <Filter></Filter>
            </div>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr'>
                {
                    facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                }
            </div>
        </div>
    );
};

export default allFacilitiesPage;