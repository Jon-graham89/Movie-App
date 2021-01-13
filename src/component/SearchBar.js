import React from "react";

const SearchBar = ({ searchInput, setSearchInput }) => {
	return (
		<input
			type="text"
			placeholder="search"
			value={searchInput}
			onChange={(event) => setSearchInput(event.target.value)}
		/>
	);
};

export default SearchBar;
