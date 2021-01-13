import React from "react";

const MovieList = ({ movies }) => {
	const movieList = movies.map((movie) => {
		return (
			<li key={movie.imdbID}>
				{movie.Title} - {movie.Year} - <button>Add Nominee</button>
			</li>
		);
	});
	return (
		<div>
			<ul>{movieList}</ul>
		</div>
	);
};

export default MovieList;
