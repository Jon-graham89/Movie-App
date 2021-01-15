import React from "react";

const MovieList = ({ movies, addNominee, btn }) => {
	let image = "";
	const movieList = movies.map((movie, index) => {
		if (movie.Poster === "N/A") {
			image =
				"https://image.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg";
		} else {
			image = movie.Poster;
		}
		return (
			<div class="inline-block px-2 w-64 h-64">
				<div
					class="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"
					key={movie.imdbID}
				>
					<img src={image} alt="Movie Poster" class="w-full h-64" />
					<div class="p-4">
						<p class="font-medium text-lg">
							<span class="font-normal  leadin-relaxed">{movie.Title}</span>
						</p>
						<p class="font-medium text-lg">
							<span class="font-normal ">{movie.Year}</span>
						</p>
					</div>
					<div className="flex justify-center">
						<button
							onClick={(event) => addNominee(event, index)}
							disabled={btn}
							className="h-10 px-1 my-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
						>
							Add Nominee
						</button>
					</div>
				</div>
			</div>
		);
	});

	return movieList;
};

export default MovieList;
