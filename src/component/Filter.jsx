"use client"
import { Label, ListBox, Select } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Filter = () => {

    const router = useRouter();
    const params = useSearchParams();
    const query = params.get("search") || ""
    const currentTypes = params.get("types") || "";

    const handleFilter = (value) => {
        router.push(`/all-facilities?search=${query}&types=${value}`)
    }
    return (
        <div className='md:w-[50%] flex justify-end mb-4 md:mb-0'>
            {/* <select defaultValue="All" className=" bg-blue-50 border border-slate-200 rounded-xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden my-6  font-bold text-center px-4 py-1 w-[40%] select select-neutral">
                <option>Football</option>
                <option>Swimming</option>
                <option>Badminton</option>
                <option>Tennis</option>
            </select> */}

            <Select className="w-[256px] font-bold"
                placeholder="Select sport type"
                selectedKeys={currentTypes}
                onSelectionChange={handleFilter}

            >

                <Select.Trigger className="bg-yellow-50 ">
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="">
                            All
                        </ListBox.Item>
                        <ListBox.Item id="Tennis" textValue="Tennis">
                            Tennis
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Swimming" textValue="Swimming">
                            Swimming
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Badminton" textValue="Badminton">
                            Badminton
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Football" textValue="Football">
                            Football
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
};

export default Filter;