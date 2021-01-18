import "./App.css";

import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./component/MovieList";
import Nominees from "./component/Nominees";
import Banner from "./component/Banner";
import NominationPopup from "./component/NominationPopup";
import useSWR from "swr";
import fetcher from "./lib/fetcher";
import Navbar from "./component/Navbar";
import { Box, Main, Heading, Grid, Card, Text } from "grommet";
import Skeleton from "react-loading-skeleton";
import debounce from "lodash.debounce";

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [debouncedInput, setDebouncedInput] = useState("");
	const [nominations, setNominations] = useState(
		JSON.parse(localStorage.getItem("nominations") || JSON.stringify([]))
	);
	const [visibility, setVisibility] = useState("invisible");
	const [currentNomination, setCurrentNomination] = useState(null);
	const { data: movies, isValidating: loadingMovieData } = useSWR(
		debouncedInput &&
			`${process.env.REACT_APP_IMDB_API_URL}/?apikey=${process.env.REACT_APP_IMDB_API_KEY}&s=${debouncedInput}`,
		fetcher
	);

	// eslint-disable-next-line
	const debouncedSave = useCallback(
		debounce((val) => {
			setDebouncedInput(val);
		}, 500),
		[] // will be created only once initially
	);

	const handleSearchInput = (val) => {
		setSearchInput(val);
		debouncedSave(val);
	};

	useEffect(() => {
		if (nominations) {
			localStorage.setItem("nominations", JSON.stringify(nominations));
		}
	}, [nominations]);

	const addNominee = (movieIndex) => {
		const nominee = movies[movieIndex];
		movies[movieIndex].clicked = true;

		if (nominations.length >= 5) {
			return alert("too many");
		}
		if (nominations.find((curr) => curr.imdbID === nominee.imdbID)) {
			return alert("movie already chosen");
		}
		setNominations([...nominations, nominee]);
		setCurrentNomination(nominee);
		popup();
	};

	const removeNomination = (nomination) => {
		// filter out the removed nomination and update our state.
		setNominations([
			...nominations.filter((curr) => curr.imdbID !== nomination.imdbID),
		]);
	};

	const clearNominationHandler = () => {
		nominations.forEach((nom) => {
			nom.clicked = false;
		});
		setNominations([]);
		localStorage.clear();
	};

	const popup = () => {
		setVisibility("visible");
		setTimeout(() => setVisibility("invisible"), 2000);
	};

	const bannerMarkup = (
		<Banner nomination={nominations} clearNomination={clearNominationHandler} />
	);

	const skeletonLayout = loadingMovieData && (
		<Main pad="medium">
			<Heading size={"small"} level={"2"}>
				<Skeleton />
			</Heading>
			<Box
				direction="row-responsive"
				justify="center"
				align="center"
				pad="large"
				gap="medium"
			>
				<Grid
					columns={{
						count: 2,
						size: "auto",
					}}
					gap="medium"
				>
					<Skeleton width={300} height={500} />
					<Skeleton width={300} height={500} />
				</Grid>
			</Box>
		</Main>
	);

	const loadedLayout = !loadingMovieData && movies && (
		<Main pad="medium">
			<Box direction={"column"}>
				<Heading size={"small"} level={"2"}>
					Search results
				</Heading>
				{movies.length === 0 && <Text>No search results found!</Text>}
			</Box>

			<Box
				direction="row-responsive"
				justify="center"
				align="center"
				pad="large"
				gap="medium"
			>
				<Grid
					columns={{
						count: 2,
						size: "auto",
					}}
					gap="medium"
				>
					<Box pad="medium" align="center" round gap="small">
						<MovieList
							movies={movies}
							addNominee={addNominee}
							nominations={nominations}
						/>
					</Box>

					<Card pad="large" wrap height={"large"}>
						<Box direction={"column"} align={"center"} gap={"medium"}>
							<Heading level={2} size={"small"}>
								Movie Nominations
							</Heading>
							<Nominees
								nominations={nominations}
								removeNominee={removeNomination}
							/>
						</Box>
					</Card>
				</Grid>
			</Box>
		</Main>
	);

	return (
		<div>
			<Navbar searchInput={searchInput} setSearchInput={handleSearchInput} />
			{nominations.length === 5 && bannerMarkup}
			{loadedLayout}
			{skeletonLayout}
			{currentNomination && (
				<NominationPopup
					nomination={currentNomination}
					visibility={visibility}
					totalNominations={nominations.length}
				/>
			)}
		</div>
	);
}

export default App;
