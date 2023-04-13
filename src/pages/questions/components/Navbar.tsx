import { Box, Flex, Container } from "@chakra-ui/react";
import { Commands } from "./Commands";
export const Navbar = () => {
  return (
    <Container>
      <Flex justifyContent="center">
        <Box
          ms="auto"
          w={{ sm: "100%", md: "unset" }}
          pb={{ sm: "5px", md: "unset" }}
        >
          <Commands />
        </Box>
      </Flex>
    </Container>
  );
};
