import { Box, Flex, Container } from "@chakra-ui/react";
import { Commands } from "./Commands";
export const Navbar = ({ command }: { command: { shuffle: Function } }) => {
  return (
    <Container>
      <Flex justifyContent="center">
        <Box
          ms="auto"
          w={{ sm: "100%", md: "unset" }}
          pb={{ sm: "5px", md: "unset" }}
        >
          <Commands shuffle={command.shuffle} />
        </Box>
      </Flex>
    </Container>
  );
};
