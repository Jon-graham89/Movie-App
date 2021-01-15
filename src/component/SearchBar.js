import React from "react";
//  <input
// 			type="text"
// 			placeholder="search"
// 			value={searchInput}
// 			onChange={(event) => setSearchInput(event.target.value)}
// 		/>
const SearchBar = ({ searchInput, setSearchInput }) => {
	return (
		<div className="my-5 pt-2 flex justify-center mx-auto text-gray-600">
			<input
				className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
				type="search"
				name="search"
				placeholder="Search for a Movie"
				onChange={(event) => setSearchInput(event.target.value)}
				value={searchInput}
			/>
			<button type="submit" className=" right-0 top-0 mt-5 mr-4"></button>
		</div>
	);
};

export default SearchBar;
