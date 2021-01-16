import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";
import Nominees from "./component/Nominees";
import Banner from "./component/Banner";

function App() {
	let getnoms = [];
	if (localStorage.length === 0) {
		localStorage.setItem("nominations", JSON.stringify([]));
		getnoms = JSON.parse(localStorage.getItem("nominations"));
	} else {
		getnoms = JSON.parse(localStorage.getItem("nominations"));
	}

	const [movies, setMovies] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [nomination, setNomination] = useState(getnoms);

	const getMovieData = async (searchInput) => {
		const url = `https://www.omdbapi.com/?apikey=86a0e89f&s=${searchInput}`;

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

		if (nom.length > 0) {
			setNomination([...nomination]);
		} else {
			setNomination([...nomination, nominee[index]]);
			// localStorage.setItem("nominations", JSON.stringify(nomination));
		}
	};

	const removeNominationHandler = (event, index) => {
		const nominee = Object.assign([], nomination);
		nominee.splice(index, 1);
		setNomination(nominee);
	};

	const clearNominationHandler = () => {
		setNomination([]);
		localStorage.clear();
	};

	const saveNominationsHandler = () => {
		localStorage.setItem("nominations", JSON.stringify(nomination));
	};

	let banner = "";
	let btnClass = false;

	if (nomination.length === 5) {
		btnClass = true;
		banner = (
			<Banner
				nomination={nomination}
				clearNomination={clearNominationHandler}
			/>
		);
	} else {
		banner = "";
		btnClass = false;
	}

	return (
		<div className="font-mono">
			{banner}
			<div className="flex justify-center items-center p-6 bg-indigo-800">
				<h1 className="text-5xl font-bold px-6 text-white">Movie Nominator</h1>
			</div>
			<div className="container mx-10">
				<SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
			</div>

			<div className="my-15">
				{nomination.length > 0 ? (
					<div>
						<p className="text-3xl mx-8">Nominations</p>
						<div className="flex justify-center">
							<button
								className="h-10 px-2 my-2 mx-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
								onClick={saveNominationsHandler}
							>
								Save Nominations
							</button>
							<button
								className="h-10 px-1 my-2 mx-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
								onClick={clearNominationHandler}
							>
								Clear Nominations
							</button>
						</div>
					</div>
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
