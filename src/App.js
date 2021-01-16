import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./component/MovieList";
import SearchBar from "./component/SearchBar";
import Nominees from "./component/Nominees";
import Banner from "./component/Banner";
import NominationButtons from "./component/NominationButtons";
import Header from "./component/Header";
import NominationPopup from "./component/NominationPopup";

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
	const [visibility, setVisibility] = useState("invisible");
	const [singleMovie, setSingleMovie] = useState("");

	const getMovieData = async (searchInput) => {
		const url = `https://www.omdbapi.com/?apikey=86a0e89f&s=${searchInput}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	//useEffect for local storage????

	useEffect(() => {
		getMovieData(searchInput);
	}, [searchInput]);

	const addNomineeHandler = (event, index) => {
		const nominee = Object.assign([], movies);
		movies[index].clicked = true;

		setNomination([...nomination, nominee[index]]);
		setSingleMovie(movies[index].Title);
		popup();
	};

	const removeNominationHandler = (event, index) => {
		const nominee = Object.assign([], nomination);
		nominee[index].clicked = false;
		nominee.splice(index, 1);
		setNomination(nominee);
	};

	const clearNominationHandler = () => {
		nomination.forEach((nom) => {
			nom.clicked = false;
		});
		setNomination([]);
		localStorage.clear();
	};

	const saveNominationsHandler = () => {
		localStorage.setItem("nominations", JSON.stringify(nomination));
	};

	const popup = () => {
		setVisibility("visible");
		setTimeout(() => setVisibility("invisible"), 2000);
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
		<div>
			{banner}
			<Header />
			<SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />

			<div className="mx-12 mx-36">
				{movies.length > 0 ? (
					<p className="text-3xl mx-8 text-white my-12">Movies</p>
				) : (
					""
				)}
				<MovieList
					movies={movies}
					addNominee={addNomineeHandler}
					btn={btnClass}
				/>
			</div>

			<div className="my-12 mx-36">
				{nomination.length > 0 ? (
					<NominationButtons
						saveNominations={saveNominationsHandler}
						clearNominations={clearNominationHandler}
					/>
				) : (
					""
				)}

				<Nominees
					nominations={nomination}
					removeNominee={removeNominationHandler}
				/>
			</div>

			<NominationPopup visibility={visibility} movieTitle={singleMovie} />
		</div>
	);
}

export default App;
