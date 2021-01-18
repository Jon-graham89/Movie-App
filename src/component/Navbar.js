import React from "react";
import { Header, Box, TextInput, Heading } from 'grommet';
import { Search } from 'grommet-icons';



const Navbar = ({ searchInput, setSearchInput }) => {

  return (
    <Header background="light-4" pad="small">
        <Box direction="row" fill justify={"center"}>
          <Box width="medium" gap="medium" justify={"center"} fill>
            <Heading margin="xsmall" size={"small"}>The Shoppies</Heading>
          </Box>
          <Box width="medium" gap="medium" justify={"center"} fill>
            <TextInput
              icon={<Search />}
              placeholder="Search for a Movie"
              onChange={(event) => setSearchInput(event.target.value)}
              value={searchInput}
            />
          </Box>
          <Box fill>

          </Box>
        </Box>
    </Header>
  );
}

export default Navbar;
