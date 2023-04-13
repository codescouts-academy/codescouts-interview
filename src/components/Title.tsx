import { Flex, Heading } from "@chakra-ui/react";

export const Title = () => {
  return (
    <Flex direction="row" gap="10px">
      <Heading
        as="h1"
        fontSize={{ base: "45px", md: "90px" }}
        fontWeight="bold"
      >
        {"<Code"}
      </Heading>
      <Heading
        as="h1"
        color="brand.200"
        fontSize={{ base: "45px", md: "90px" }}
        fontWeight="bold"
      >
        {"Scouts/>"}
      </Heading>
    </Flex>
  );
};
