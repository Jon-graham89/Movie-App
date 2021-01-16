import React from "react";

const MovieList = ({ movies, addNominee, btn }) => {
	let disable =
		"h-10 px-1 my-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800";
	let image = "";
	const movieList = movies.map((movie, index) => {
		if (movie.clicked) {
			disable =
				" disable h-10 px-1 my-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800";
		} else {
			disable =
				"h-10 px-1 my-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800";
		}
		if (movie.Poster === "N/A") {
			image =
				"https://image.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg";
		} else {
			image = movie.Poster;
		}
		return (
			<div className="inline-block px-2 w-64 h-64" key={movie.imdbID}>
				<div className="card-color rounded-lg overflow-hidden shadow-xl my-8 py-4">
					<img src={image} alt="Movie Poster" className="w-full h-64" />
					<div className="p-4">
						<p className="font-medium text-lg">
							<span className="font-normal  leadin-relaxed">{movie.Title}</span>
						</p>
						<p className="font-medium text-lg">
							<span className="font-normal ">{movie.Year}</span>
						</p>
					</div>
					<div className="flex justify-center">
						<button
							onClick={(event) => addNominee(event, index)}
							disabled={btn}
							className={disable}
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

// "h-10 px-1 my-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
