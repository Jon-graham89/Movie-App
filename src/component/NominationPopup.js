import React from "react";

const NominationPopup = (props) => {
	return (
		<div className={props.visibility}>
			<div className="flex justify-center relative">
				<div className="px-4 py-3 font-normal text-purple-100 bg-purple-800 text-2xl  fixed bottom-0">
					<p>You nominated: {props.movieTitle}</p>
				</div>
			</div>
		</div>
	);
};

export default NominationPopup;
