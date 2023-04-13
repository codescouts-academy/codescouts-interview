import { Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Background } from "../components/Background";

const NotFound = () => {
  const navigate = useNavigate();

  const goToStart = () => navigate("/");

  return (
    <Flex
      direction="column"
      gap="20px"
      h="100vh"
      alignItems="center"
      justify="center"
    >
      <Background />

      <Flex direction="row" gap="10px">
        <Heading as="h1" fontSize="90px" fontWeight="bold">
          {"<Ups!"}
        </Heading>
        <Heading as="h1" color="brand.200" fontSize="90px" fontWeight="bold">
          {"404/>"}
        </Heading>
      </Flex>

      <Button onClick={() => goToStart()}>Volvamos al inicio</Button>
    </Flex>
  );
};

export default NotFound;
