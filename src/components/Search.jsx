import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="flex w-full justify-center items-end">
      <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
        <label className="leading-7 text-sm text-gray-600">Search</label>
        <input
          type="text"
          ref={searchInput}
          value={search}
          onChange={handleSearch}
          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Search;
