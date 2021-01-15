import React from "react";

const Banner = () => (
	<div class="inline-block px-2 w-64 h-64">
		<div
			class="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"
			key={Math.random()}
		>
			<img
				src="https://m.media-amazon.com/images/M/MV5BMWI0NWY0ODUtNGY3Yy00ZDU1LTllYjUtMDFkYWEzZGQwY2I1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
				alt="movieimage"
				class="w-full h-64"
			/>
			<div class="p-4">
				<p class="font-medium text-lg">
					Title:{" "}
					<span class="font-normal text-base leadin-relaxed">movie title</span>
				</p>
				<p class="font-medium text-lg">
					Year of Release: <span class="font-normal text-base">movie year</span>
				</p>
			</div>
		</div>
	</div>
);

export default Banner;
