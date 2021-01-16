import React from "react";

const NominationButtons = (props) => {
	return (
		<div>
			<p className="text-3xl mx-8 text-white">Nominations</p>
			<div className="flex justify-center">
				<button
					className="h-10 px-2 my-2 mx-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
					onClick={props.saveNominations}
				>
					Save Nominations
				</button>
				<button
					className="h-10 px-1 my-2 mx-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
					onClick={props.clearNominations}
				>
					Clear Nominations
				</button>
			</div>
		</div>
	);
};

export default NominationButtons;
