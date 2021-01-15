import React from "react";

const Nominees = ({ nominations, removeNominee }) => {
	const nominationList = nominations.map((nominee, index) => {
		return (
			<div
				key={"nom" + nominee.imdbID}
				className="border-2 flex justify-center flex-col px-5 py-2 m-5"
			>
				<img src={nominee.Poster} className="h-48 w-40" />
				<p>{nominee.Title}</p>
				<p>{nominee.Year}</p>
				<button
					onClick={(event) => removeNominee(event, index)}
					className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
				>
					Remove Nominee
				</button>
			</div>
		);
	});

	return nominationList;
};

export default Nominees;
