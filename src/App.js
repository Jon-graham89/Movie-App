import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	const getMovieData = async (searchInput) => {
		const url = `http://www.omdbapi.com/?apikey=86a0e89f&s=${searchInput}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieData(searchInput);
	}, [searchInput]);

	return (
		<div>
			<h1>hello world</h1>
			<SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
			<MovieList movies={movies} />
		</div>
	);
}

export default App;
