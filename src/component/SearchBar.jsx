
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";



const SearchBar = () => {
  const router =useRouter();
  const params = useSearchParams();

  const defaultValue = params.get("search")||"";
  const [text, setText] =useState(defaultValue);

  const handleSearch = () => {
    const query =text.trim();
    router.push(`/all-facilities?search=${query}&types=${params.get("types") || ""}`);
  }

  return (
    <div className="md:relative flex  items-center  bg-white border border-slate-200 rounded-xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden my-6 w-[90vw] md:w-[48%] h-12">

      <div className="pl-5 hidden lg:block text-slate-400">
       <CiSearch />
      </div>

      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Search for facility name"
        className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
      />

      <button
        onClick={handleSearch}
        className="h-8  px-2 md:px-6   mr-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"

      >
        Search
      </button>

      
    </div>
  );
};

export default SearchBar;