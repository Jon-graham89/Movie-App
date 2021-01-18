import React from "react";

const NominationPopup = ({ nomination, totalNominations, visibility }) => {
	return (
		<div className={visibility}>
			<div className="flex justify-center relative">
				<div className="px-4 py-3 font-normal text-purple-100 bg-purple-800 text-2xl  fixed bottom-0 ">
					<p>{totalNominations}/5</p>
					<p>You nominated: {nomination.Title}</p>
				</div>
			</div>
		</div>
	);
};

export default NominationPopup;
