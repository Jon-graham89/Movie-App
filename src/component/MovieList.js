import React from "react";

const MovieList = ({ movies, addNominee, btn, btnClass }) => {
	const movieList = movies.map((movie, index) => {
		return (
			<div
				key={movie.imdbID}
				className="border-2 flex justify-center flex-col px-5 py-2 m-5"
			>
				<img src={movie.Poster} className="h-48 w-40" />
				<p>{movie.Title}</p>
				<p>{movie.Year}</p>
				<button
					onClick={(event) => addNominee(event, index)}
					disabled={btn}
					className="h-10 px-1 my-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
				>
					Add Nominee
				</button>
			</div>
		);
	});
	return movieList;
};

export default MovieList;
