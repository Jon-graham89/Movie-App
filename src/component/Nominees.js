import React from "react";
import {Box, Button, Text, List} from "grommet";

const Nominees = ({ nominations, removeNominee }) => {
	const renderItem = (nominee) => {
		return (
			<Box direction="row-responsive" gap="medium" fill>
				<Box fill direction={"column"}>
					<Text weight="bold">{nominee.Title}</Text>
					<Text weight={"normal"} size={"small"}>{nominee.Year}</Text>

				</Box>
				<Box align={"end"}>
					<Button label="Remove" onClick={() => removeNominee(nominee)}>
					</Button>
				</Box>

			</Box>
		);
	};

	return <List data={nominations} pad="medium">
		{nominee => renderItem(nominee)}
	</List>
};

export default Nominees;
