import { Box, Flex, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box h="100vh" w="100vw">
      <Flex justifyContent="center" alignItems="center" h="100vh" w="100vw">
        <Spinner size="xl" thickness="4px" speed="0.65s" color="brand.200" />
      </Flex>
    </Box>
  );
};
