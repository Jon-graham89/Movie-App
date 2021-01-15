import React from "react";

const Banner = (props) => (
	<div className="overflow-hidden leading-normal w-screen fixed " role="alert">
		<p className="px-4 py-3 font-bold text-purple-100 bg-purple-800 text-2xl">
			Confirm your Nominations
		</p>
		<div className="px-4 py-3 text-purple-700 bg-purple-100 ">
			{/* <ul>
				{props.nomination.map((n) => {
					return <li key={Math.random()}>{n.Title}</li>;
				})}
			</ul> */}

			<button className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
				Confirm Nomination
			</button>
			<button
				onClick={props.clearNomination}
				className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
			>
				Clear Nomination
			</button>
		</div>
	</div>
);

export default Banner;
