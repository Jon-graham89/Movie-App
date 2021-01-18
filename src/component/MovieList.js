import React from "react";
import {
	Card,
	Grid,
	Text,
	Stack,
	Heading,
	CardHeader,
	CardBody,
	Image,
	Box,
} from "grommet";

const MovieList = ({ movies, addNominee, nominations }) => {
	let alreadyNominated = movies.filter((movie) =>
		nominations.some((noms) => movie.imdbID === noms.imdbID)
	);
	alreadyNominated.forEach((movieNom) => (movieNom.clicked = true));

	let image = "";

	const movieList = movies.map((movie, index) => {
		if (movie.Poster === "N/A") {
			image =
				"https://image.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg";
		} else {
			image = movie.Poster;
		}
		return (
			<Card
				className={"hvr-grow"}
				key={movie.imdbID}
				onClick={() => addNominee(index)}
				style={{
					cursor: "pointer",
				}}
			>
				<Stack anchor="bottom-left">
					<CardBody height="medium">
						<Image fit="cover" src={image} a11yTitle={movie.Title} />
					</CardBody>
					<CardHeader
						pad={{ horizontal: "small", vertical: "small" }}
						// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
						background="#000000A0"
						width="medium"
						justify="start"
					>
						<Box>
							<Heading level="3" margin="none" size={"small"}>
								{movie.Title}
							</Heading>
							<Text size="small">{movie.Year}</Text>
						</Box>
					</CardHeader>
				</Stack>
			</Card>
		);
	});

	return (
		<Grid fill columns={{ count: 3, size: "auto" }} gap="medium">
			{movieList}
		</Grid>
	);
};

export default MovieList;
