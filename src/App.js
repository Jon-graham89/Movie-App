import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";
import Nominees from "./component/Nominees";
import Banner from "./component/Banner";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [nomination, setNomination] = useState([]);
	const [singlePoster, setSinglePoster] = useState(
		"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
	);

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

	const addNomineeHandler = (event, index) => {
		const nominee = Object.assign([], movies);
		const nom = nomination.filter((movie) => movie === nominee[index]);

		nominee[index].clicked = true;
		if (nom.length > 0) {
			setNomination([...nomination]);
		} else {
			setNomination([...nomination, nominee[index]]);
		}

		if (nominee[index].Poster === "N/A") {
			setSinglePoster(
				`https://image.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg`
			);
		} else {
			setSinglePoster(nominee[index].Poster);
		}
	};

	const removeNominationHandler = (event, index) => {
		const nominee = Object.assign([], nomination);
		nominee.splice(index, 1);
		setNomination(nominee);
	};

	const clearNominationHandler = () => {
		setNomination([]);
	};
	let btn = "";
	let btnClass = false;
	if (nomination.length === 5) {
		btnClass = true;
		btn = (
			<div
				className="overflow-hidden leading-normal w-screen fixed "
				role="alert"
			>
				<p className="px-4 py-3 font-bold text-purple-100 bg-purple-800">
					Confirm your Nominations
				</p>
				<ul className="px-4 py-3 text-purple-700 bg-purple-100 ">
					{nomination.map((n) => {
						return <li key={Math.random()}>{n.Title}</li>;
					})}
				</ul>
				<button className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
					Confirm
				</button>
				<button
					onClick={clearNominationHandler}
					className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
				>
					Clear Nomination
				</button>
			</div>
		);
	} else {
		btnClass = false;
		btn = "";
	}

	return (
		<div className="font-mono">
			{btn}
			<div className="flex justify-center items-center p-6 bg-indigo-800">
				<h1 className="text-5xl font-bold px-6 text-white">Movie Nominator</h1>

				{/* <img className="w-40 h-45 px-3 py-3" src={singlePoster} alt="logo" /> */}
			</div>
			<div className="container mx-10">
				<SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
			</div>

			<div className="my-15">
				{nomination.length > 0 ? (
					<p className="text-3xl mx-8">Nominations</p>
				) : (
					""
				)}

				<Nominees
					nominations={nomination}
					removeNominee={removeNominationHandler}
				/>
			</div>
			<div>
				<div className="">
					<p className="text-3xl mx-8">Movies</p>
					<MovieList
						movies={movies}
						addNominee={addNomineeHandler}
						btn={btnClass}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
