import React from "react";

const Nominees = ({ nominations, removeNominee }) => {
	let image = "";
	const nominationList = nominations.map((nominee, index) => {
		if (nominee.Poster === "N/A") {
			image =
				"https://image.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg";
		} else {
			image = nominee.Poster;
		}

		return (
			<div className="inline-block px-2 w-64 h-64" key={"nom" + nominee.imdbID}>
				<div className="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4">
					<img src={image} alt="Movie Poster" className="w-full h-64" />
					<div className="p-4">
						<p className="font-medium text-lg">
							<span className="font-normal leadin-relaxed">
								{nominee.Title}
							</span>
						</p>
						<p className="font-medium text-lg">
							<span className="font-normal">{nominee.Year}</span>
						</p>
					</div>
					<div className="flex justify-center">
						<button
							onClick={(event) => removeNominee(event, index)}
							className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
						>
							Remove Nominee
						</button>
					</div>
				</div>
			</div>
		);
	});

	return nominationList;
};

export default Nominees;
